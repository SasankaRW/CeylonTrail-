const express = require("express");

const { DestinationRoutes } = require("./models/Destinations");
const { VisaRoutes } = require("./models/Visa");

const router = express.Router();

router.use("/destination", DestinationRoutes);
router.use("/visa",VisaRoutes)


module.exports = router;
