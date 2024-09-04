const Controller = require("./controller");
const Constants = require("./constants");
const Service = require("./service");
const Routes = require("./router");
const Destination = require("./Destination");

module.exports = {
  DestinationConstants: Constants,

  DestinationService: Service,

  DestinationController: Controller,

  DestinationRoutes: Routes,

  Destination: Destination,
};
