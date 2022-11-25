import { DataTypes } from "sequelize";
import { database } from "../database";
import { Dono } from "./donos";

export const Pet = database.define(
  "pet",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    especie: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    raca: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

Dono.hasMany(Pet, {
  constraints: true,
  foreignKey: "dono_pet",
});

Pet.belongsTo(Dono);