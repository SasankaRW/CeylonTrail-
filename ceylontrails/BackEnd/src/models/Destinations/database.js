const Destination = require("./destination");
const mongoose = require("mongoose");

// Create a single record (destination)
const createSingleRecord = async (singleRecord) => {
  const data = singleRecord.data;
  const newDestination = new Destination({
    name: data.name,
    description: data.description,
    image: data.image,
    address: data.address,
    category_tags: data.category_tags,
    location: {
      type: "Point",
      coordinates: [data.destinationLocation.long, data.destinationLocation.lat],
    },
  });

  return await newDestination.save();
};

// Delete a single record by ID (destination)
const deleteSingleRecord = async (id) => {
  return await Destination.findByIdAndDelete(id);
};

// Update multiple records based on a query
const updateMultipleRecords = async (query, updates) => {
  return await Destination.updateMany(query, updates);
};

// Update a single record based on a condition
const updateRecord = async (id, dataNeedToUpdate) => {
  return await Destination.findByIdAndUpdate(id, dataNeedToUpdate, { new: true });
};

// Find one record by ID (destination)
const findOneById = async (id) => {
  return await Destination.findById(id);
};

// Find all records (destinations)
const findAll = async () => {
  return await Destination.find().sort({ createdAt: -1 });
};

// Find records based on a query (e.g., by name)
const findByQuery = async (query) => {
  return await Destination.find({
    name: { $regex: query, $options: "i" },
  });
};

// Find records based on location (nearby destinations)
const findByLocation = async (params) => {
  return await Destination.find({
    location: {
      $geoWithin: {
        $centerSphere: [[params.long, params.lat], 5000 / 6378.1],
      },
    },
  }).select("-createdAt -updatedAt");
};

module.exports = {
  Schema: Destination,
  createSingleRecord,
  deleteSingleRecord,
  updateMultipleRecords,
  updateRecord,
  findOneById,
  findAll,
  findByQuery,
  findByLocation,
};
