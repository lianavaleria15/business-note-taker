//export router from express
const { Router } = require("express");

//import api routes
const apiRoutes = require("./api/index");

//import notes page routes
const viewRoutes = require("./view/viewRoutes");
//create a router
const router = Router();

//register "api" endpoint
router.use("/api", apiRoutes);

//register notes page endpoint
router.use("/", viewRoutes);

//export router
module.exports = router;
