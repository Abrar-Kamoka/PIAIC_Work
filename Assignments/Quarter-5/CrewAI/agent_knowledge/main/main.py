from crewai import Agent, Task, Crew, Process, LLM
import os
from crewai.knowledge.source.json_knowledge_source import JSONKnowledgeSource

content = "Users name is John. He is 30 years old and lives in San Francisco."

json_source = JSONKnowledgeSource(
    file_path  = ["data.json"]
)

llm = LLM(
    api_key = os.getenv("GOOGLE_API_KEY"),
    model="gemini/gemini-1.5-pro",
)
    
agent = Agent(
    role="About User",
    goal="You know everything about the user.",
    backstory="""You are a master at understanding people and their preferences.""",
    verbose=True,
    allow_delegation=False,
    llm=llm,
)

task = Task(
    description="Answer the following questions about the user: {question}",
    expected_output="An answer to the question.",
    agent=agent,
)

crew = Crew(
    agents=[agent],
    tasks=[task],
    verbose=True,
    process=Process.sequential,
    knowledge_sources=[json_source], # Enable knowledge by adding the sources here. You can also add more sources to the sources list.
)

result = crew.kickoff(inputs={"question": "Tell me everything about John"})