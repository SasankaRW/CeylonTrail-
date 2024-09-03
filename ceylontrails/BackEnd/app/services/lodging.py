from typing import List, Optional
from bson import ObjectId
from pymongo.collection import Collection
from models.lodging import Lodging

class LodgingService:
    def __init__(self, collection: Collection):
        self.collection = collection

    async def create_lodging(self, lodging_data: Lodging) -> Lodging:
        result = await self.collection.insert_one(lodging_data.dict(by_alias=True))
        return Lodging(**lodging_data.dict(), _id=str(result.inserted_id))

    async def get_lodging_by_id(self, lodging_id: str) -> Optional[Lodging]:
        result = await self.collection.find_one({"_id": ObjectId(lodging_id)})
        if result:
            return Lodging(**result)
        return None

    async def list_lodgings(self) -> List[Lodging]:
        lodgings = []
        async for doc in self.collection.find():
            lodgings.append(Lodging(**doc))
        return lodgings

    async def update_lodging(self, lodging_id: str, lodging_data: Lodging) -> Optional[Lodging]:
        result = await self.collection.update_one(
            {"_id": ObjectId(lodging_id)},
            {"$set": lodging_data.dict(by_alias=True)}
        )
        if result.modified_count:
            return await self.get_lodging_by_id(lodging_id)
        return None

    async def delete_lodging(self, lodging_id: str) -> bool:
        result = await self.collection.delete_one({"_id": ObjectId(lodging_id)})
        return result.deleted_count > 0
