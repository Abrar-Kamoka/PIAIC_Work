from langchain.agents import AgentExecutor
from langchain.agents import create_tool_calling_agent
from langchain_google_genai import ChatGoogleGenerativeAI,GoogleGenerativeAIEmbeddings
from langchain_community.tools.tavily_search import TavilySearchResults
from langchain_community.document_loaders import WebBaseLoader
from langchain_community.vectorstores import FAISS
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain.tools.retriever import create_retriever_tool
from langchain_community.chat_message_histories import ChatMessageHistory
from langchain_core.runnables.history import RunnableWithMessageHistory
from bs4 import BeautifulSoup
from langchain import hub
from langchain.tools import tool
import os
from dotenv import load_dotenv
load_dotenv()

llm = ChatGoogleGenerativeAI(model="gemini-1.5-pro", google_api_key = os.getenv("GOOGLE_API_KEY"))
search = TavilySearchResults(tavily_api_key = os.getenv("TAVILY_API_KEY"))

loader = WebBaseLoader("https://www.techloset.com/")

docs = loader.load()
documents = RecursiveCharacterTextSplitter(
    chunk_size=1000, chunk_overlap=200
).split_documents(docs)

vector = FAISS.from_documents(documents, GoogleGenerativeAIEmbeddings(model="models/embedding-001"))

retriever  = vector.as_retriever()

retriever_tool = create_retriever_tool(
    retriever,
    "techloset_search",
    "Search for information about Techloset. For any questions about Techloset Solutions, you must use this tool!",
)

tools = [search, retriever_tool]

prompt = hub.pull("hwchase17/openai-functions-agent")

agent = create_tool_calling_agent(llm, tools, prompt)

agent_executer = AgentExecutor(agent=agent, tools=tools, verbose=True)

message_history = ChatMessageHistory(messages=[])

agent_with_chat_history = RunnableWithMessageHistory(
    agent_executer,
    lambda session_Id: message_history,
    input_messages_key="input",
    history_messages_key="chat_history",
)

try:
    while True:
        user_input = input("How can I help you today?\n")
        if user_input.lower() in {"exit", "quit"}:
            print("Goodbye!")
            break
        response = agent_with_chat_history.invoke(
            {"input": user_input},
            config={"configurable": {"session_id": "Test1"}}
        )
        print(response)
except KeyboardInterrupt:
    print("\nSession terminated.")