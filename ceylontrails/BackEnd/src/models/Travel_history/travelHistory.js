const mongoose = require('mongoose');

const TravelInfoSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true,
    },
    arrival_date: {
        type: Date,
        required: true,
    },
    departure_date: {
        type: Date,
        required: true,
    },
});

const TravelHistorySchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
    },
    travel_info: [TravelInfoSchema],  // Array of travel information
});

module.exports = mongoose.model('TravelHistory', TravelHistorySchema);

