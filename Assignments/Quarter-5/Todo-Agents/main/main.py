from dotenv import load_dotenv
from sqlmodel import create_engine, SQLModel, Field, Session, select, inspect
from fastapi import FastAPI, Depends, HTTPException
from contextlib import asynccontextmanager
from typing import Annotated
import os
from langchain_community.document_loaders import TextLoader
from langchain_community.vectorstores import FAISS
from langchain_google_genai import ChatGoogleGenerativeAI, GoogleGenerativeAIEmbeddings
from langgraph.checkpoint.memory import MemorySaver
from langgraph.graph import START, StateGraph, END
from langgraph.prebuilt import tools_condition, ToolNode
from langgraph.graph import MessagesState
from langchain.schema import HumanMessage, SystemMessage


# Load environment variables
load_dotenv()

# Db con
class Todo(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    title: str
    description: str = None
    status: str = Field(default="pending")

connection_string: str = str(os.getenv("DATABASE_URL")).replace("postgresql", "postgresql+psycopg")
engine = create_engine(connection_string, connect_args={"sslmode": "required"}, pool_recycle=3600, pool_size=10, echo=True)

def create_tables():
    SQLModel.metadata.create_all(engine)

@asynccontextmanager
async def lifespan(app: FastAPI):
    print("Creating Tables...")
    create_tables()
    print("Table Created")
    try:
        yield
    finally:
        print("Lifespan context ended")
    

# FastAPI app

app = FastAPI()

@app.get("/")
def index():
    return {"message": "Welcome to My Todo App"}

def create_todo(title: str, description: str= None, status: str = "pending") -> Todo:
    """ Add a new todo to the database."""
    todo = Todo(title=title, description=description, status=status)
    with  Session(engine) as session:
        session.add(todo)
        session.commit()
        session.refresh(todo)
    return todo

def read_todo(status: str = None) -> list[Todo]:
    """Retrieve todo fromm the dababase."""

    with Session(engine) as  session:
        statement = select(Todo)
        if status:
            statement = statement.where(Todo.status == status)
        todos = session.exec(statement).all()
    return todos

def update_todo(todo_id: int, title: str = None, description: str = None, status: str = None) -> Todo:
    """Update a todo in the database."""
    with Session(engine) as session:
        todo = session.get(Todo, todo_id)
        if not todo:
            return None
        if title:
            todo.title = title
        if description:
            todo.description = description
        if status:
            todo.status = status
        session.add(todo)
        session.commit()
        session.refresh(todo)
    return todo

def delete_todo(todo_id: int) -> bool:
    """Delete a todo by its id"""

    with Session(engine) as session:
        todo = session.get(Todo, todo_id)
        if not todo:
            return False
        session.delete(todo)
        session.commit()
    return True

# LLM setup

llm = ChatGoogleGenerativeAI(model = "gemini-1.5-pro", google_api_key = os.getenv("GOOGLE_API_KEY"))


tools = [create_todo, read_todo, update_todo, delete_todo]
llm_with_tools = llm.bind_tools(tools)

# System message
sys_msg = """
You are a Todo Management Assistant with access to tools for managing a user's todos. You can perform the following actions:

- **Create Todo**: Add a new todo by providing a title, an optional description, and a status (default is 'pending').
- **Read Todos**: Retrieve a list of todos, with optional filtering by status (e.g., 'pending', 'completed').
- **Update Todo**: Modify an existing todo by ID, updating its title, description, or status.
- **Delete Todo**: Remove a todo from the database by ID.

### Guidelines:
- Always ask for the required details to perform an action and confirm completion with clear feedback.
- Keep your responses short, focused, and task-oriented. Avoid unnecessary or irrelevant information.
- Use the provided tools to efficiently perform actions. Do not attempt tasks that can be handled using external tools.
- Handle errors with empathy and politely inform the user about any issues.
- Stay within the scope of todo management. If asked about unrelated topics, kindly remind the user of your purpose and steer the conversation back to todo management.

Maintain a professional, polite, and helpful tone throughout your interactions.
"""

# Assistant definition

def assistant(state: MessagesState):
    return {"message": [llm_with_tools.invoke([sys_msg] + state["messages"][-10])]}
# def assistant(state: MessagesState):
#     messages = [SystemMessage(content=sys_msg)]
#     user_messages = [HumanMessage(content=msg[1]) for msg in state["messages"][-10]]
#     return {"message": llm_with_tools.invoke(messages + user_messages)}

# Graph nodes and edges
builder = StateGraph(MessagesState)
builder.add_node("assistant", assistant)
builder.add_node("tools", ToolNode(tools))

builder.add_edge(START, "assistant")
builder.add_conditional_edges("assistant", tools_condition)
builder.add_edge("assistant", END)

# Graph memory
memory = MemorySaver()

# Build the graph
agent = builder.compile(checkpointer=memory)

# API for chatbot interaction
@app.get("/chat/{query}")
def get_content(query: str):
    print(query)
    try:
        config = {"configurable": {"thread_id": "2"}}
        result = agent.invoke({"messages": [("user", query)]}, config)
        return result
    except Exception as e:
        return {"error": str(e)}