import { Sequelize, DataTypes } from "sequelize";
import database from "../database";

const Pet = database.define("pet", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
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
  tipo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  raca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  }
}, {
  timestamps: true,
  tableName: 'pets'
})

export default Pet;
