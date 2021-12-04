//export router from express
const { Router } = require("express");

//import notes routes
const noteRoutes = require("./notesRoutes");

//create a router
const router = Router();

//register "api" endpoint to get notes
router.use("/notes", notesRoutes);

//export router
module.exports = router;
