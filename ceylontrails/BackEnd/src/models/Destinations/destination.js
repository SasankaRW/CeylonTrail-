const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    category_tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
    collection: "destinations",
  }
);

const Destination = mongoose.model("Destination", destinationSchema);

module.exports = Destination;
