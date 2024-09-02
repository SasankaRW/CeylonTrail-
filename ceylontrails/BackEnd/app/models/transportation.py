from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
from bson import ObjectId

# Helper function to handle ObjectId conversion
def objectid_to_str(object_id: ObjectId) -> str:
    return str(object_id)

class Transportation(BaseModel):
    _id: Optional[str] = Field(default=None, alias="_id")
    mode: str
    carbon_emission_factor: float
    cost_per_mile: float
    eco_friendly_index: datetime

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {
            ObjectId: objectid_to_str
        }
