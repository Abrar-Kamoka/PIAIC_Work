from langchain.agents import initialize_agent, AgentType
from langchain_google_genai import GoogleGenerativeAI
from langchain.tools import tool
from dotenv import load_dotenv
import requests
import os
load_dotenv()

llm = GoogleGenerativeAI(model="gemini-1.5-pro", google_api_key = os.getenv("GOOGLE_API_KEY"))

@tool
def add_numbers(input_data: str) -> str:
    """
    A tool to add numbers mentioned in the input text.
    """
    try:
        words = input_data.split()
        numbers = [int(word) for word in words if word.isdigit()]
        
        if len(numbers) < 2:
            return "I need at least two numbers to add."
        
        result = sum(numbers)
        return f"The total is {result}."
    except Exception as e:
        return f"An error occurred: {e}"
    
@tool
def get_weather_detail(city: str) -> str:
    """
    Get the current weather details for a specified city.
    """
    try:
        api_key = os.getenv("WEATHER_API_KEY")
        if not api_key:
            return "Error: WEATHER_API_KEY is not set in the .env file."

        response = requests.get(
            "https://api.openweathermap.org/data/2.5/weather",
            params={"q": city, "appid": api_key, "units": "metric"},
        )
        response.raise_for_status()

        data = response.json()
        weather_description = data['weather'][0]['description']
        temperature = data['main']['temp']
        return f"The weather in {city} is {weather_description} with a temperature of {temperature}°C."
    except requests.exceptions.RequestException as e:
        return f"An error occurred while fetching the weather details: {e}"


agent =  initialize_agent(
    tools=[add_numbers, get_weather_detail], 
    agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    llm=llm,
    verbose=True,
    max_iterations=10,
)

result = agent.run("i visited 5 places and wanna go 5 more places in future, how much it'll be. And im gonna visit pakistan, what is the weather in Faisalabad.")
print(result)


























# from langchain_google_genai import GoogleGenerativeAI
# from langchain_core.prompts import PromptTemplate
# from langchain_core.runnables import RunnableSequence
# from langchain_core.tools import tool
# from dotenv import load_dotenv
# import os
# load_dotenv()

# llm = GoogleGenerativeAI(model="gemini-1.5-pro", google_api_key = os.getenv("GOOGLE_API_KEY"))

# @tool
# def add_numbers(input_data: str) -> str:
#     """
#     A tool to add numbers mentioned in the input text.
#     """
#     try:
#         # Extract numbers from the input text
#         words = input_data.split()
#         numbers = [int(word) for word in words if word.isdigit()]
        
#         if len(numbers) < 2:
#             return "I need at least two numbers to add."
        
#         result = sum(numbers)
#         return f"The total is {result}."
#     except Exception as e:
#         return f"An error occurred: {e}"


# @tool
# def multiple_nums(input_data: str) -> str:
#     """
#     A tool to handle input data for demonstration purposes.
#     """
#     print("multiple_nums input_data", input_data)
#     return "hi, im 2nd tool"


# prompt =  PromptTemplate(
#     input_variables=["user_input"],
#     template=(
#         "You are a tool caller. Extract two numbers from the user input and call the add_numbers "
#         "with them. No further information is required. User message: {user_input}"
#     ),
# )
    
# chain = RunnableSequence(
#         prompt, llm, add_numbers, multiple_nums
# )

# user_input = chain.invoke("i visited 5 places and wanna go 5 more places in future, how much it'll be")

# print("\n Resp: ", user_input)