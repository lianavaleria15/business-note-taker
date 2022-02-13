//export router from express
const { Router } = require("express");

//import controller functions
const {
  getNotes,
  postNote,
  deleteNote,
} = require("../../controllers/api/note");

//create a router
const router = Router();

//register a get notes path
router.get("/", getNotes);

//register a post note path
router.post("/", postNote);

//register a delete note path
router.delete("/:id", deleteNote);

//export router
module.exports = router;
