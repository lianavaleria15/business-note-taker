//add controller functions for notesRoutes
const getNotes = (req, res) => {
  res.send("getNotes");
};

const postNote = (req, res) => {
  res.send("addNote");
};

const deleteNote = (req, res) => {
  res.send("deleteNote");
};

//export controller functions
module.exports = { getNotes, postNote, deleteNote };
