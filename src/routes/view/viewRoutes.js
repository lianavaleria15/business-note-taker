//export router from express
const { Router } = require("express");

//create a router
const router = Router();

//import view notes controller fs
const { viewNotes, viewIndex } = require("../../controllers/view/viewNotes");

//create a view notes html path
router.use("/notes", viewNotes);

//create a view index page path
router.use("*", viewIndex);

//export router
module.exports = router;
