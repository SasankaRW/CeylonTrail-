from pydantic import BaseModel, Field, EmailStr, HttpUrl
from typing import Optional
from datetime import datetime
from bson import ObjectId

# Helper function to handle ObjectId conversion
def objectid_to_str(object_id: ObjectId) -> str:
    return str(object_id)

class User(BaseModel):
    _id: Optional[str] = Field(default=None, alias="_id")
    username: str
    email: EmailStr
    password: str  # In practice, this should be hashed and never returned in responses
    profile_picture: Optional[HttpUrl] = None
    contact_info: Optional[str] = None
    created_at: Optional[datetime] = Field(default=None, alias="created_at")
    updated_at: Optional[datetime] = Field(default=None, alias="updated_at")

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {
            ObjectId: objectid_to_str
        }
