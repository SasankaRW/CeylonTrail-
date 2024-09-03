from typing import List, Optional
from fastapi import HTTPException
from app.services.lodging import LodgingService
from models.lodging import Lodging

class LodgingController:
    def __init__(self, service: LodgingService):
        self.service = service

    async def create_lodging(self, lodging_data: Lodging) -> Lodging:
        return await self.service.create_lodging(lodging_data)

    async def get_lodging_by_id(self, lodging_id: str) -> Lodging:
        lodging = await self.service.get_lodging_by_id(lodging_id)
        if not lodging:
            raise HTTPException(status_code=404, detail="Lodging not found")
        return lodging

    async def list_lodgings(self) -> List[Lodging]:
        return await self.service.list_lodgings()

    async def update_lodging(self, lodging_id: str, lodging_data: Lodging) -> Lodging:
        lodging = await self.service.update_lodging(lodging_id, lodging_data)
        if not lodging:
            raise HTTPException(status_code=404, detail="Lodging not found or not updated")
        return lodging

    async def delete_lodging(self, lodging_id: str) -> bool:
        success = await self.service.delete_lodging(lodging_id)
        if not success:
            raise HTTPException(status_code=404, detail="Lodging not found or not deleted")
        return success
