from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.schema import AIMessage, HumanMessage, SystemMessage
from langchain_core.prompts import PromptTemplate
from dotenv import load_dotenv
import os
load_dotenv()

llm = ChatGoogleGenerativeAI(model = "gemini-1.5-pro", google_api_key = os.getenv("GOOGLE_API_KEY"))

prompt = PromptTemplate(
    template=(
        "You are a helpful assistant. Below is the conversation history:\n"
        "{conversation}\n"
        "Based on this, respond to the user's latest messages:\n"
        "{latest_message}"
    ), 
    input_variables=["conversation", "latest_message"]
)

chain = prompt | llm

conversation = [
    SystemMessage(content="You are a helpful assistant."),
]

while True:
    for message in conversation:
        if isinstance(message, HumanMessage):
            print(f"User: {message.content}")
        elif isinstance(message, AIMessage):
            print(f"AI: {message.content}")
        elif isinstance(message, SystemMessage):
            print(f"System: {message.content}")
    

    human_message = input("\nWrite your message: ")

    conversation.append(HumanMessage(content=human_message))

    formatted_conversation = "\n".join(
        f"User: {msg.content}" if isinstance(msg, HumanMessage)
        else f"AI: {msg.content}" if isinstance(msg, AIMessage)
        else f"System: {msg.content}"
        for msg in conversation
    )

    AI_response = chain.invoke({
        "conversation": formatted_conversation,
        "latest_message": human_message
    })

    conversation.append(AIMessage(content=AI_response.content))

    print(f"\nAI: {AI_response.content}")








## before - basic scenario

# prompt1 = PromptTemplate(template="This chat is about to Creating story {context}, the story should be in just 10 points, add line space after each character conversation end and only display the content part {context}", input_variables=["context"])

# chain = prompt1 | llm
# while True:
#     human_message = input("write your message: ")
#     AI_message = chain.invoke({"context": human_message})
#     print(AI_message)