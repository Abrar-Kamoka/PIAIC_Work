from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def index_route():
    return {'hello': 'world'}