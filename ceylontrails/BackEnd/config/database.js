const mongoose = require('mongoose');
const { APPLICATION } = require('./config');

// MongoDB URI
const mongoURI = APPLICATION.MONGODB_URI;

// Connect to MongoDB
require('dotenv').config();

const db = async () => {
  try {
    const uri = process.env.MONGO_URI || 'mongodb+srv://ecolanka:sasankamadubaj@ecolanka.5eexz.mongodb.net/';
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = db;
