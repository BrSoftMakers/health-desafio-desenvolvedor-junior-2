const express = require("express");
const router = require("./router");
const cors = require("cors");
const { sequelize } = require("./models");

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

sequelize.sync().then(() => {
  console.log("Banco de dados conectado");
});

module.exports = app;
