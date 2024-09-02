from typing import List, Optional
from datetime import datetime
from models import Lodging

# Mock database for illustration; replace with actual database calls
mock_db = {}

def create_lodging(lodging: Lodging) -> Lodging:
    lodging._id = str(len(mock_db) + 1)  # Simple ID generation for example
    mock_db[lodging._id] = lodging
    return lodging

def get_lodging(lodging_id: str) -> Optional[Lodging]:
    return mock_db.get(lodging_id)

def update_lodging(lodging_id: str, updated_lodging: Lodging) -> Optional[Lodging]:
    if lodging_id in mock_db:
        updated_lodging._id = lodging_id
        mock_db[lodging_id] = updated_lodging
        return updated_lodging
    return None

def delete_lodging(lodging_id: str) -> bool:
    if lodging_id in mock_db:
        del mock_db[lodging_id]
        return True
    return False

def list_lodgings() -> List[Lodging]:
    return list(mock_db.values())
