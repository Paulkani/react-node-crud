const express = require("express");
const cors = require("cors");
const app = express();
// var mysql = require("mysql");
const databaseroutes = require("./route");
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(databaseroutes);

app.listen(5000, () => {
  console.log(`Server is running on port 8000.`);
});
