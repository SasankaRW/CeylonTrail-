const express = require("express");
const TravelController = require("./controller");
const router = express.Router();

router.route("/newTravelHistory").post(VisaValidator.create, VisaController.createVisaRequest);
router.route("/tavelHistory/:user_id").get(VisaController.getVisaById);

module.exports = router;