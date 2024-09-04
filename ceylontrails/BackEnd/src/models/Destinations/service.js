const Destination = require("./Destination"); // Mongoose model

const { to, TE } = require("../../helper");

const getAllDestinations = async (params) => {
  const getRecords = Destination.find(params);

  const [err, result] = await to(getRecords);

  if (err) TE(err);

  if (!result || result.length === 0) TE("Results not found");

  return result;
};

const getDestinationById = async (id) => {
  const getRecord = Destination.findById(id);

  const [err, result] = await to(getRecord);

  if (err) TE(err);

  if (!result) TE("Result not found");

  return result;
};

const getDestinationByName = async (name) => {
  const getRecord = Destination.findOne({ name });

  const [err, result] = await to(getRecord);

  if (err) TE(err);

  if (!result) TE("Result not found");

  return result;
};

const createDestination = async (data) => {
  const createSingleRecord = Destination.create(data);

  const [err, result] = await to(createSingleRecord);

  if (err) TE(err.errors ? err.errors[0].message : err);

  if (!result) TE("Result not found");

  return result;
};

const updateDestination = async (id, updateData) => {
  const updateRecord = Destination.findByIdAndUpdate(id, updateData, { new: true });

  const [err, result] = await to(updateRecord);

  if (err) TE(err.errors ? err.errors[0].message : err);

  if (!result) TE("Result not found");

  return result;
};

const deleteDestination = async (id) => {
  const deleteRecord = Destination.findByIdAndDelete(id);

  const [err, result] = await to(deleteRecord);

  if (err) TE(err);

  if (!result) TE("Result not found");

  return result;
};

module.exports = {
  getAllDestinations,
  getDestinationById,
  getDestinationByName,
  createDestination,
  updateDestination,
  deleteDestination,
};
