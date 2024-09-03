from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
from bson import ObjectId

# Helper function to handle ObjectId conversion
def objectid_to_str(object_id: ObjectId) -> str:
    return str(object_id)

class Visa(BaseModel):
    _id: Optional[str] = Field(default=None, alias="_id")
    user_id: str
    issue_date: [datetime] = None # type: ignore
    expiration_date: [datetime] = None # type: ignore
    address: [str] = None # type: ignore
    approved_officer: Optional[str] = None 
    approved_status: Optional[str] = None
    decision_date: Optional[datetime] = None
    dob: [datetime] = None  # Date of Birth # type: ignore
    gender_id: Optional[str] = None
    mobile_number: Optional[str] = None
    nationality: Optional[str] = None
    nic: Optional[str] = None  # National Identity Card number
    occupation: Optional[str] = None
    passport_bio_photo: Optional[datetime] = None
    passport_no: Optional[str] = None
    passport_photo: Optional[str] = None
    status: Optional[str] = None
    submission_date: Optional[datetime] = None
    travel_history_id: Optional[str] = None
    first_name: str
    last_name: str

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {
            ObjectId: objectid_to_str
        }
