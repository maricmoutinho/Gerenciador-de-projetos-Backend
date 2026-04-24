const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: String,
  link: String,
  date: Date
});

module.exports = mongoose.model("Project", ProjectSchema);