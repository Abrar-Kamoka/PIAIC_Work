from fastapi import FastAPI
from langchain.community.llms import HuggingFaceEndpoint
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv
import os
load_dotenv()

app = FastAPI()

llm = HuggingFaceEndpoint(
    repo_id = "HuggingFaceH4/zephyr-7b-beta",
    huggingfacehub_api_token=os.getenv("HuggingFace_Token")
)

@app.get('/generate/')
async def generate_response(query: str):
    prompt =  PromptTemplate(template="Generate a response to: {query}", input_variables=["query"])
    formated_prompt = prompt.format(query=query)
    response = llm(formated_prompt)
    return {"response": response}

if __name__ == "__main__":
    import uvicorn 
    uvicorn.run(app, host = "127.0.0.1", port=8000)

# def index_route():
#     return {'hello': 'world'}