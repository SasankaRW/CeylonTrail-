from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
from bson import ObjectId

def objectid_to_str(object_id: ObjectId) -> str:
    return str(object_id)

class AdminModel(BaseModel):
    _id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")
    username: str = Field(..., unique=True)
    email: str = Field(..., unique=True)
    password: str = Field(...)
    profile_picture: Optional[str] = Field(None)
    contact_info: Optional[str] = Field(None)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        allow_population_by_field_name = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "_id": "60d9fbb2f9b5a65a90f28b8a",
                "username": "admin_user",
                "email": "admin@example.com",
                "password": "hashed_password_string",
                "profile_picture": "http://example.com/profile.jpg",
                "contact_info": "+1-234-567-8900",
                "created_at": "2024-09-02T00:00:00Z",
                "updated_at": "2024-09-02T00:00:00Z"
            }
        }

