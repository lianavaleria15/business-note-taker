//create an express server
const express = require("express");

const app = express();

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on htttp://localhost:${PORT}`)
);
