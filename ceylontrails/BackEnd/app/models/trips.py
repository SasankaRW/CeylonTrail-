from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
from bson import ObjectId

# Helper function to handle ObjectId conversion
def objectid_to_str(object_id: ObjectId) -> str:
    return str(object_id)

class ItineraryItem(BaseModel):
    destination_id: Optional[str] = None
    event_id: Optional[str] = None
    lodging_id: Optional[str] = None
    transportation_id: Optional[str] = None

class Trip(BaseModel):
    _id: Optional[str] = Field(default=None, alias="_id")
    user_id: str
    trip_name: str
    trip_type: str
    start_date: datetime
    end_date: datetime
    status: str
    itinerary: List[ItineraryItem]
    created_at: Optional[datetime] = Field(default=None, alias="created_at")
    updated_at: Optional[datetime] = Field(default=None, alias="updated_at")

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {
            ObjectId: objectid_to_str
        }
