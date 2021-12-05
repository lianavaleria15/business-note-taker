//create an express server
const express = require("express");

//import routes
const routes = require("./routes");

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
//connect server to routes
// app.use(routes);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on htttp://localhost:${PORT}`)
);
