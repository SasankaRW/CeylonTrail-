import os
from fastapi import FastAPI
from dotenv import load_dotenv
from pymongo import MongoClient
from typing import AsyncGenerator

# Load environment variables from .env file
load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), '../.env'))

# Retrieve MongoDB connection string from environment variables
mongo_uri = os.getenv("DATABASE_URL")

# FastAPI app instance
app = FastAPI()

# Lifespan event handler for managing DB connection
@app.on_event("startup")
async def startup_event():
    global client, db, lodging_collection, users_collection
    
    # Initialize MongoDB client and database
    client = MongoClient(mongo_uri)
    db = client["CeylonTrails"]
    
    # Define collections
    lodging_collection = db["lodging"]
    users_collection = db["users"]
    
    print("Connected to MongoDB")

@app.on_event("shutdown")
async def shutdown_event():
    # Close MongoDB connection on shutdown
    client.close()
    print("MongoDB connection closed")

# Example route for testing
@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}


