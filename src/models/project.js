let mongoose = require("mongoose");

let projectSchema = new mongoose.Schema({
  pseudo: String,
  description: String
});

var Project = mongoose.model("Project", projectSchema);

module.exports = Project;
