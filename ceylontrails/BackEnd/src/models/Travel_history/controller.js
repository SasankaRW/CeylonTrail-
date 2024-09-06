const TravelHistoryService = require("./service");
const { SUCCESS, ERROR } = require("../../helper");

const { SUC_CODES } = require("./constants").Codes;

// console.log("h=get all travelHistory")
// const getAllTravelHistory = async (req, res) => {
//   try {
//     const result = await VisaService.getAllTravelHistory(req.query);
//     SUCCESS(res, SUC_CODES, result, req.span);
//   } catch (err) {
//     ERROR(res, err, req.span);
//   }
// };

const createTravelHistory = async (req, res) => {
  try {
    const result = await VisaService.createTravelHistory(req.body);
    SUCCESS(res, SUC_CODES, result, req.span);
  } catch (error) {
    ERROR(res, error, req.span);
  }
};

const getTravelHistoryById = async (req, res) => {
  try {
    const result = await VisaService.getTravelHistoryById(req.params.id);
    SUCCESS(res, SUC_CODES, result, req.span);
  } catch (error) {
    ERROR(res, error, req.span);
  }
};

module.exports = {
    createTravelHistory,
    getTravelHistoryById,
 
};
