const Visa = require("./visa");
const mongoose = require("mongoose");

const createVisaRecord = async (visaData) => {
  const newVisa = new Visa(visaData);
  return await newVisa.save();
};

const updateVisaRecord = async (id, dataToUpdate) => {
  return await Visa.findByIdAndUpdate(id, dataToUpdate, { new: true });
};

const findVisaById = async (id) => {
  return await Visa.findById(id);
};

const findAllVisaRecords = async () => {
  return await Visa.find().sort({ createdAt: -1 });
};

const find = async () => {
  console.log("Fetching all visa records without filters...");
  const records = await Visa.find();
  console.log("Visa records found:", records);
  return records;
};

module.exports = {
  createVisaRecord,
  updateVisaRecord,
  findVisaById,
  findAllVisaRecords,
  find,
};
