const Service = require("./service");

const { SUCCESS, ERROR } = require("../../helper");

const { SUC_CODES } = require("./constants").Codes;

const getAllDestinations = async (req, res) => {
  try {
    const result = await Service.getAllDestinations(req.query);
    SUCCESS(res, SUC_CODES, result, req.span);
  } catch (err) {
    console.log(err);
    ERROR(res, err, req.span);
  }
};

const createDestination = async (req, res) => {
  try {
    const result = await Service.createDestination(req.body);
    SUCCESS(res, SUC_CODES, result, req.span);
  } catch (error) {
    console.log(error);
    ERROR(res, error, req.span);
  }
};

const getDestinationById = async (req, res) => {
  try {
    const result = await Service.getDestinationById(req.params.id);
    SUCCESS(res, SUC_CODES, result, req.span);
  } catch (error) {
    console.log(error);
    ERROR(res, error, req.span);
  }
};

const getDestinationByName = async (req, res) => {
  try {
    const result = await Service.getDestinationByName(req.params.name);
    SUCCESS(res, SUC_CODES, result, req.span);
  } catch (error) {
    console.log(error);
    ERROR(res, error, req.span);
  }
};

const updateDestination = async (req, res) => {
  try {
    const result = await Service.updateDestination(req.params.id, req.body);
    SUCCESS(res, SUC_CODES, result, req.span);
  } catch (error) {
    console.log(error);
    ERROR(res, error, req.span);
  }
};

const deleteDestination = async (req, res) => {
  try {
    const result = await Service.deleteDestination(req.params.id);
    SUCCESS(res, SUC_CODES, result, req.span);
  } catch (error) {
    console.log(error);
    ERROR(res, error, req.span);
  }
};

module.exports = {
  getAllDestinations,
  createDestination,
  getDestinationById,
  getDestinationByName,
  updateDestination,
  deleteDestination,
};
