const sequelize = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const Animal = require("./animalsModel");

const animal = Animal(sequelize, DataTypes);

const db = {
  animal,
  sequelize,
};

module.exports = db;
