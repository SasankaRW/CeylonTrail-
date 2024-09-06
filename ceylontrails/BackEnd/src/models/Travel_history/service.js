const TravelHistory = require("./travelHistory"); // Mongoose model
const axios = require("axios");
const DataBase = require("./database")
const { to, TE } = require("../../helper");

const createTravelHistory = async (data) => {
  const createSingleRecord = TravelHistory.create(data);
  const [err, result] = await to(createSingleRecord);
  if (err) TE(err);
  return result;
};

const getTravelHistoryById = async (id) => {
  const getRecord = Visa.findById(id);
  const [err, result] = await to(getRecord);
  if (err) TE(err);
  return result;
};


module.exports = {
    createTravelHistory,
    getTravelHistoryById,  
};