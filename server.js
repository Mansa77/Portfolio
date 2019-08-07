const express = require("express");
const Database = require("./src/database");
let database = new Database();
var bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use("/admin", require("./routes/admin"));
app.use("/", require("./routes/index"));

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views");

app.listen(port, function() {
  console.log("Julien est connecté au port " + port);
});
app.use(bodyParser.urlencoded({ extended: true }));
