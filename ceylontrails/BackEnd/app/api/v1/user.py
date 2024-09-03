from fastapi import APIRouter, Depends
from typing import List
from app.models.user import User
from app.controller.user import UserController
from app.services.user import UserService
from app.core.main import users_collection 


router = APIRouter()

# Assuming the MongoDB client and database are initialized in main.py and passed to the service
user_service = UserService(users_collection)
user_controller = UserController(user_service)

@router.post("/users/", response_model=User)
async def create_user(user: User):
    return await user_controller.create_user(user)

@router.get("/users/{user_id}", response_model=User)
async def get_user(user_id: str):
    return await user_controller.get_user_by_id(user_id)

@router.get("/users/", response_model=List[User])
async def list_users():
    return await user_controller.list_users()

@router.put("/users/{user_id}", response_model=User)
async def update_user(user_id: str, user: User):
    return await user_controller.update_user(user_id, user)

@router.delete("/users/{user_id}", response_model=bool)
async def delete_user(user_id: str):
    return await user_controller.delete_user(user_id)
