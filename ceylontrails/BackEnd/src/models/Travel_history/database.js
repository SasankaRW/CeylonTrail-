const TravelHistory = require("./travelHistory");
const mongoose = require("mongoose");

const createTravelHistory = async (travelData) => {
  const newTravel = new Visa(travelData);
  return await newTravel.save();
};

const findTravelHistoryId = async (id) => {
  return await TravelHistory.findById(id);
};

const find = async () => {
  console.log("dataaaa")
  return await TravelHistory.find({
    
  });
};

module.exports = {
  createTravelHistory,
  findTravelHistoryId,
  find,
};
