from langchain_huggingface import HuggingFaceEndpoint, ChatHuggingFace
from langchain_core.prompts import PromptTemplate
from langchain.chains import SimpleSequentialChain, LLMChain
from langchain.schema import RunnableMap, RunnableSequence
from dotenv import load_dotenv
import os
load_dotenv() 


llm = HuggingFaceEndpoint(
    repo_id= "HuggingFaceH4/zephyr-7b-beta",
    huggingfacehub_api_token= os.getenv("HuggingFace_Token")
)

prompt1 = PromptTemplate(template="Translate the following English text to Spanish: {text}", input_variables=["text"])
prompt2 = PromptTemplate(template="What is the sentiment of this Spanish text: {text}", input_variables=["text"])

chain = RunnableSequence(
    steps = [
        RunnableMap ({ "text": prompt1 | llm }),
        RunnableMap ({ "text": prompt2 | llm })
    ]
)

# chain1 = LLMChain(llm = llm, prompt = prompt1)
# chain2 = LLMChain(llm = llm, prompt = prompt2)

# chain = SimpleSequentialChain(chains = [chain1, chain2])

result = chain.invoke("You are such a bad guy")

print(result)



# langchainPrompt = PromptTemplate.from_template("Recipe of {cake} cake")

# prompt_output = langchainPrompt.invoke({"cake": "chocolate"})
# # prompt = "Recipe of a chocolate & strawberry cake, output should be in 6 points"
# print (prompt_output)

# chat_model = ChatHuggingFace(llm=llm)

# response = chat_model.invoke(prompt_output)

# print(response)