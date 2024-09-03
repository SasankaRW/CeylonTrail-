# from pymongo.collection import Collection
# from typing import Optional
# from app.models.user import User

# class UserService:
#     def __init__(self, collection: Collection):
#         self.collection = collection

#     def get_user_by_id(self, user_id: str) -> Optional[User]:
#         user_data = self.collection.find_one({"_id": user_id})
#         if user_data:
#             return User(**user_data)
#         return None
