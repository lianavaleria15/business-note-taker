//add controller functions for notesRoutes
const getNotes = (req, res) => {
  //get all notes
  //send response of all notes
};

const postNote = (req, res) => {
  res.send("addNote");
};

const deleteNote = (req, res) => {
  res.send("deleteNote");
};

//export controller functions
module.exports = { getNotes, postNote, deleteNote };
