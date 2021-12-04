//export router from express
const { Router } = require("express");

//import notes routes
const viewRoutes = require("../view/viewRoutes");

//create a router
const router = Router();

//register "api" endpoint to get notes
router.use("/notes", viewRoutes);

//export router
module.exports = router;
