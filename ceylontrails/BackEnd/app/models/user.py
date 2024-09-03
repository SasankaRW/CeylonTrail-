from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime

class User(BaseModel):
    _id: Optional[str] = Field(alias="_id")
    username: str
    email: EmailStr
    password: str
    profile_picture: Optional[str] = None
    contact_info: Optional[str] = None
    created_at: Optional[datetime] = Field(default_factory=datetime.utcnow)
    updated_at: Optional[datetime] = Field(default_factory=datetime.utcnow)

    class Config:
        populate_by_name = True