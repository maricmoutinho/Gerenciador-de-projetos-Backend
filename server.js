const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.log(err));

const routes = require("./routes/projectRoutes");
app.use("/api/projects", routes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});