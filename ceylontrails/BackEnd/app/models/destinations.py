from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
from bson import ObjectId

# Helper function to handle ObjectId conversion
def objectid_to_str(object_id: ObjectId) -> str:
    return str(object_id)

class Destination(BaseModel):
    _id: Optional[str] = Field(default=None, alias="_id")
    name: str
    location: str
    description: Optional[str]
    latitude: float
    longitude: float
    image: Optional[str]  # URL to the image
    created_at: datetime = Field(default_factory=datetime.utcnow, alias="created_at")
    updated_at: datetime = Field(default_factory=datetime.utcnow, alias="updated_at")

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {
            ObjectId: objectid_to_str
        }
