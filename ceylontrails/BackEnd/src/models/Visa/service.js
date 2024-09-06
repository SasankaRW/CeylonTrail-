const Visa = require("./visa"); // Mongoose model
const axios = require("axios");
const DataBase = require("./database")
const { to, TE } = require("../../helper");

const checkInterpolNotice = async (passport_no) => {
  try {
    const response = await axios.get(`https://interpol.api.bund.dev/notices?passport_no=${passport_no}`);
    return response.data;
  } catch (err) {
    TE("Failed to check with Interpol");
  }
};

const getAllVisaRequests = async (params) => {
  console.log("inside visa service")
  const getRecords = DataBase.find();
  console.log("data in service")
  console.log(getRecords)
  const [err, result] = await to(getRecords);
  if (err) TE(err);
  return result;
};

const createVisaRequest = async (data) => {
  // const interpolCheck = await checkInterpolNotice(data.passport_no);
  // if (interpolCheck && interpolCheck.found) {
  //   TE("Interpol has a notice on this passport");
  // }

  const createSingleRecord = Visa.create(data);
  const [err, result] = await to(createSingleRecord);
  if (err) TE(err);
  return result;
};

const getVisaById = async (id) => {
  const getRecord = Visa.findById(id);
  const [err, result] = await to(getRecord);
  if (err) TE(err);
  return result;
};

const approveVisaRequest = async (id, approved_officer) => {
  const updateRecord = Visa.findByIdAndUpdate(
    id,
    { approved_status: "Approved", approved_officer, decision_date: new Date() },
    { new: true }
  );
  const [err, result] = await to(updateRecord);
  if (err) TE(err);
  return result;
};

module.exports = {
  getAllVisaRequests,
  createVisaRequest,
  getVisaById,
  approveVisaRequest,
};
