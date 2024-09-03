from pymongo.collection import Collection
from models.user import User
from typing import List
from bson import ObjectId

class UserService:
    def __init__(self, users_collection: Collection):
        self.user_collection = users_collection

    async def create_user(self, user: User) -> User:
        user_dict = user.dict(by_alias=True)  # Convert Pydantic model to dictionary
        result = self.user_collection.insert_one(user_dict)
        user_dict["id"] = str(result.inserted_id)  # Use 'id' for the new field name
        return User(**user_dict)

    async def get_user_by_id(self, user_id: str) -> User:
        user_data = self.user_collection.find_one({"_id": ObjectId(user_id)})
        if user_data:
            user_data["id"] = str(user_data["_id"])  # Convert '_id' to 'id'
            del user_data["_id"]  # Remove '_id' field
            return User(**user_data)
        return None

    async def list_users(self) -> List[User]:
        users = []
        for user_data in self.user_collection.find():
            user_data["id"] = str(user_data["_id"])  # Convert '_id' to 'id'
            del user_data["_id"]  # Remove '_id' field
            users.append(User(**user_data))
        return users

    async def update_user(self, user_id: str, user: User) -> User:
        user_dict = user.dict(by_alias=True)  # Convert Pydantic model to dictionary
        self.user_collection.update_one({"_id": ObjectId(user_id)}, {"$set": user_dict})
        return await self.get_user_by_id(user_id)

    async def delete_user(self, user_id: str) -> bool:
        result = self.user_collection.delete_one({"_id": ObjectId(user_id)})
        return result.deleted_count == 1
