//export router from express
const { Router } = require("express");

//create a router
const router = Router();

//import view notes controller fs
const { viewNotes } = require("../../controllers/view/viewNotes");

//create a get notes html path
router.get("./notes", viewNotes);
//export router
module.exports = router;
