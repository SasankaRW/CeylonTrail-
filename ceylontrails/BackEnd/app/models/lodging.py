from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
from bson import ObjectId

# Helper function to handle ObjectId conversion
def objectid_to_str(object_id: ObjectId) -> str:
    return str(object_id)

class Lodging(BaseModel):
    _id: Optional[str] = Field(default=None, alias="_id")
    destination_id: Optional[str] = Field(default=None, alias="destination_id")
    name: str
    location: str
    price: float
    rating: float
    amenities: List[str]
    occupancy: int
    created_at: datetime = Field(default_factory=datetime.utcnow, alias="created_at")
    updated_at: datetime = Field(default_factory=datetime.utcnow, alias="updated_at")

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {
            ObjectId: objectid_to_str
        }
