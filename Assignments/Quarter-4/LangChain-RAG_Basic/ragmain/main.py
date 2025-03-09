from langchain_community.document_loaders import TextLoader
from langchain.indexes import VectorstoreIndexCreator
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAI, GoogleGenerativeAIEmbeddings
import os
from dotenv import load_dotenv
load_dotenv()

llm = GoogleGenerativeAI(model= "gemini-1.5-pro", google_api_key= os.getenv("GOOGLE_API_KEY"))

try:
    loader = TextLoader("data.txt")
except Exception as e:
    print("Error while loading file= ", e)

# Create Embeddings
embedding = GoogleGenerativeAIEmbeddings(model="models/embedding-001")

# use small/average chunks for better experience and to manage token limits
text_splitter =  RecursiveCharacterTextSplitter(chunk_size = 500, chunk_overlap=100)

# Create the index with the specified embedding model and text splitter
index_creator =  VectorstoreIndexCreator(
    embedding=embedding,
    text_splitter=text_splitter    
)

index = index_creator.from_loaders([loader])

# while True:
#     human_message = input("Ask me anything about Hotel:\n")
#     response = index.query(human_message, llm=llm)
#     print(response)

    # Interactive Q&A loop
print("Hotel Knowledge Base Assistant is ready. Ask your questions below:")
while True:
    try:
        user_query = input("\nYour question: ")
        if user_query.strip().lower() in {"exit", "quit"}:
            print("Exiting the assistant. Goodbye!")
            break
        response = index.query(user_query, llm=llm)
        print(f"Response:\n{response}")
    except Exception as e:
        print(f"An error occurred: {e}")