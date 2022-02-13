//import path
const path = require("path");

//controller fs to view index page
const viewIndex = (req, res) => {
  //import index file
  const filePath = path.join(__dirname, "../../../public/index.html");
  res.sendFile(filePath);
};

//controller fs to view notes html page
const viewNotes = (req, res) => {
  //import notes file
  const filePath = path.join(__dirname, "../../../public/notes.html");
  res.sendFile(filePath);
};

module.exports = { viewIndex, viewNotes };
