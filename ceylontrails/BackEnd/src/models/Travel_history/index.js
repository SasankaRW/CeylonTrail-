const Controller = require("./controller");
const Constants = require("./constants");
const Service = require("./service");
const Routes = require("./router");
const TravelHistory = require("./travelHistory"); // Visa model

module.exports = {
  TravelConstants: Constants,
  TravelService: Service,
  TravelController: Controller,
  TravelRoutes: Routes, 
  TravelHistory: TravelHistory,
};
