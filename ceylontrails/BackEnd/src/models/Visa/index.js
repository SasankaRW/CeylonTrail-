const Controller = require("./controller");
const Constants = require("./constants");
const Service = require("./service");
const Routes = require("./router");
const Visa = require("./visa"); // Visa model

module.exports = {
  VisaConstants: Constants,
  VisaService: Service,
  VisaController: Controller,
  VisaRoutes: Routes, // Routes are already defined here
  Visa: Visa, // The Mongoose Visa model
};
