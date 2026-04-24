const Project = require("../models/Project");

// Criar
exports.createProject = async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.json(project);
};

// Listar
exports.getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

// Atualizar
exports.updateProject = async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(project);
};

// Deletar
exports.deleteProject = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Deletado" });
};