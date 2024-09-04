const express = require("express");

const { DestinationRoutes } = require("./models/Destinations");

const router = express.Router();

router.use("/destination", UserRoutes);


module.exports = router;
