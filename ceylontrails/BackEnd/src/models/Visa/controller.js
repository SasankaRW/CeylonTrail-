const VisaService = require("./service");
const { SUCCESS, ERROR } = require("../../helper");

const { SUC_CODES } = require("./constants").Codes;

console.log("h=get all visa")
const getAllVisaRequests = async (req, res) => {
  try {
    const result = await VisaService.getAllVisaRequests(req.query);
    SUCCESS(res, SUC_CODES, result, req.span);
  } catch (err) {
    ERROR(res, err, req.span);
  }
};

const createVisaRequest = async (req, res) => {
  try {
    const result = await VisaService.createVisaRequest(req.body);
    SUCCESS(res, SUC_CODES, result, req.span);
  } catch (error) {
    ERROR(res, error, req.span);
  }
};

const getVisaById = async (req, res) => {
  try {
    const result = await VisaService.getVisaById(req.params.id);
    SUCCESS(res, SUC_CODES, result, req.span);
  } catch (error) {
    ERROR(res, error, req.span);
  }
};

const approveVisaRequest = async (req, res) => {
  try {
    const result = await VisaService.approveVisaRequest(req.params.id, req.body.approved_officer);
    SUCCESS(res, SUC_CODES, result, req.span);
  } catch (error) {
    ERROR(res, error, req.span);
  }
};

module.exports = {
  getAllVisaRequests,
  createVisaRequest,
  getVisaById,
  approveVisaRequest,
};
