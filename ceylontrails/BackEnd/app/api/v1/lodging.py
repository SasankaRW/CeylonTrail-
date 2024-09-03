from fastapi import APIRouter, DependsLodging
from typing import List
from models.lodging import Lodging
from app.controller.lodging import LodgingController
from app.services.lodging import LodgingService
from pymongo import MongoClient

router = APIRouter()
from app.api.v1.main import lodging_collection

# Service and controller initialization
lodging_service = LodgingService(lodging_collection)
lodging_controller = LodgingController(lodging_service)

@router.post("/lodgings/", response_model=Lodging)
async def create_lodging(lodging: Lodging):
    return await lodging_controller.create_lodging(lodging)

@router.get("/lodgings/{lodging_id}", response_model=Lodging)
async def get_lodging(lodging_id: str):
    return await lodging_controller.get_lodging_by_id(lodging_id)

@router.get("/lodgings/", response_model=List[Lodging])
async def list_lodgings():
    return await lodging_controller.list_lodgings()

@router.put("/lodgings/{lodging_id}", response_model=Lodging)
async def update_lodging(lodging_id: str, lodging: Lodging):
    return await lodging_controller.update_lodging(lodging_id, lodging)

@router.delete("/lodgings/{lodging_id}", response_model=bool)
async def delete_lodging(lodging_id: str):
    return await lodging_controller.delete_lodging(lodging_id)
