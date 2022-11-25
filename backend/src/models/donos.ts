import { DataTypes } from "sequelize";
import { database } from "../database";

export const Dono = database.define("dono", {
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
  telefone: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
},{
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});