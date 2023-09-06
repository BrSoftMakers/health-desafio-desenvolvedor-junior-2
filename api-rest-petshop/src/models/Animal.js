import { DataTypes } from "sequelize";
import sequelize from "../config/dbConnect.js";

const Animal = sequelize.define("animais", {
    id:{
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idade: DataTypes.INTEGER,
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    raca: DataTypes.STRING,
    nome_dono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

sequelize.sync();

export default Animal;