const express = require("express");

const { DestinationRoutes } = require("./models/Destinations");

const router = express.Router();

router.use("/destination", DestinationRoutes);


module.exports = router;
