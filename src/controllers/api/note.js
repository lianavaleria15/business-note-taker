const fs = require("fs");
const path = require("path");

//add controller functions for notesRoutes
const readFromFile = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    return JSON.parse(content);
  } catch (error) {
    // handle error
    console.log(error.message);
  }
};

const DB_FILE_PATH = path.join(__dirname, "../../../db/db.json");

const getNotes = (req, res) => {
  // read data db.json
  const notes = readFromFile(DB_FILE_PATH);

  // send data in response
  res.json(notes);
};

const postNote = (req, res) => {
  // read data from db.json
  const notes = readFromFile(DB_FILE_PATH);
  console.log(notes);

  // get payload from req body
  const payload = req.body;
  console.log(payload);

  // push new note to notes

  // write to file

  // send response
  res.send("addNote");
};

const deleteNote = (req, res) => {
  // read data from db.json

  // get id of note to delete

  // filter notes and remove the note

  // write the filtered notes to file

  // send response
  res.send("deleteNote");
};

//export controller functions
module.exports = { getNotes, postNote, deleteNote };
