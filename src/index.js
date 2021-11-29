const express = require("express");
const routes = require("./routes");

const PORT = 3000;

const app = express();

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
