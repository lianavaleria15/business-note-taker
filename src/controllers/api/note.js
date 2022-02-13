const fs = require("fs");
const path = require("path");

const { v4: uuidv4 } = require("uuid");
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

//controller fs to write to file
const writeToFile = (note) => {
  try {
    fs.writeFileSync(path.join(__dirname, "../../../db/db.json"), note);
  } catch (error) {
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

  // get payload from req body
  const payload = req.body;

  // push new note to notes
  const addNote = {
    id: uuidv4(),
    ...payload,
  };

  notes.push(addNote);

  // write to file
  writeToFile(JSON.stringify(notes));

  // send response
  res.send("addNote");
};

const deleteNote = (req, res) => {
  // read data from db.json
  const notes = readFromFile(DB_FILE_PATH);

  // get id of note to delete
  const deleteNoteId = req.params.id;

  // filter notes and remove the note
  const updatedNotes = notes.filter((note) => note.id != deleteNoteId);

  // write the filtered notes to file
  writeToFile(JSON.stringify(updatedNotes));

  // send response
  res.send("deleteNote");
};

//export controller functions
module.exports = { getNotes, postNote, deleteNote };
