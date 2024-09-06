const mongoose = require("mongoose");

const visaSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    issue_date: {
      type: Date,
      required: true,
    },
    expiration_date: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
      trim: true,
    },
    approved_officer: {
      type: String,
      trim: true,
    },
    approved_status: {
      type: String,
      trim: true,
    },
    decision_date: {
      type: Date,
    },
    dob: {
      type: Date,
      required: true,
    },
    gender_id: {
      type: String,
      trim: true,
    },
    mobile_number: {
      type: String,
      trim: true,
    },
    nationality: {
      type: String,
      trim: true,
    },
    nic: {
      type: String,
      trim: true,
    },
    occupation: {
      type: String,
      trim: true,
    },
    passport_bio_photo: {
      type: Date,
    },
    passport_no: {
      type: String,
      trim: true,
    },
    passport_photo: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      trim: true,
    },
    submission_date: {
      type: Date,
    },
    travel_history_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TravelHistory",
    },
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    collection: "Visa",
  }
);

const Visa = mongoose.model("Visa", visaSchema);

module.exports = Visa;
