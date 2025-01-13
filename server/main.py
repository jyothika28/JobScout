from typing import Union

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.get("/shiva")
def read_shiva():
    return {"shiva": "Hello Shiva"}

@app.get("/users/{user_id}")
def read_user(user_id: int):
    return {"user_id": user_id}

@app.post("/users/")
def create_user(name: str):
    return {"name": name}

@app.put("/users/{user_id}")
def update_user(user_id: int, name: str):
    return {"user_id": user_id, "name": name}

@app.delete("/users/{user_id}")
def delete_user(user_id: int):
    return {"user_id": user_id, "status": "deleted"}
