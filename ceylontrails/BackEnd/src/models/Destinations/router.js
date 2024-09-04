const express = require("express");
const Controller = require("./controller");
const Validator = require("./validator"); // Assuming you have a validation layer
const router = express.Router();

router.route("/newdestination").post(Validator.create, Controller.createDestination);
router.route("/get/alldestinations").get(Controller.getAllDestinations);
router.route("/get/:id").get(Controller.getDestinationById);
router.route("/getByName/:name").get(Controller.getDestinationByName);
router.route("/update/:id").put(Validator.update, Controller.updateDestination);
router.route("/delete/:id").delete(Controller.deleteDestination);

module.exports = router;
