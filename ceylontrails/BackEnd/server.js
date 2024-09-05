
const { Config } = require("./config");
const { PORT } = Config.APPLICATION;

const app = require("./src");

require('dotenv').config();
const onListeningLog = `
   server is running on port : ${PORT} !!!`;

// app.js or server.js

const mongoose = require('mongoose');

const uri = process.env.MONGO_URI || 'mongodb+srv://ecolanka:sasankamadubaj@ecolanka.5eexz.mongodb.net/';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));


const onListening = () => console.log(onListeningLog);

app.listen(PORT, "0.0.0.0", onListening());

module.exports = app;
