from typing import List
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import uvicorn

app = FastAPI()

class Student(BaseModel):
    student_id: int
    name: str
    age: int
    grade: str

students_db = []

# CRUD operations for students
@app.get("/students", response_model=List[Student])
async def get_students():
    return students_db

@app.get("/students/{student_id}", response_model=Student)
async def get_student(student_id: int):
    for student in students_db:
        if student.student_id == student_id:
            return student
    raise HTTPException(status_code=404, detail="Student not found")

@app.post("/students", response_model=Student)
async def create_student(name: str, age: int, grade: str):
    student_id = len(students_db) + 1
    new_student = Student(student_id=student_id, name=name, age=age, grade=grade)
    students_db.append(new_student)
    return new_student

@app.put("/students/{student_id}", response_model=Student)
async def update_student(student_id: int, name: str, age: int, grade: str):
    for student in students_db:
        if student.student_id == student_id:
            student.name = name
            student.age = age
            student.grade = grade
            return student
    raise HTTPException(status_code=404, detail="Student not found")

@app.delete("/students/{student_id}", response_model=Student)
async def delete_student(student_id: int):
    for i, student in enumerate(students_db):
        if student.student_id == student_id:
            del students_db[i]
            return student
    raise HTTPException(status_code=404, detail="Student not found")



def start():
    uvicorn.run("in_memory_students_crud.main:app", host="127.0.0.1", port=8080, reload=True)


if __name__ == "__main__":
    start()
