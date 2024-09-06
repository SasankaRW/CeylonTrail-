const express = require("express");
const VisaController = require("./controller");
const VisaValidator = require("./validator"); // Assuming you have a validation layer
const router = express.Router();

router.route("/newvisa").post(VisaValidator.create, VisaController.createVisaRequest);
router.route("/allvisa").get(VisaController.getAllVisaRequests);
router.route("/visa/:id").get(VisaController.getVisaById);
router.route("/approve/:id").put( VisaController.approveVisaRequest);

module.exports = router;
