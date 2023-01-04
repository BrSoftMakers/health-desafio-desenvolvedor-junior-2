import * as dotenv from  "dotenv";
import { DataTypes, Sequelize } from "sequelize";

dotenv.config();

export const sequelize = new Sequelize({
    database: process.env.databaseName,
    host: process.env.databaseHost,
    username: process.env.databaseUser,
    password: process.env.databasePassword,
    dialect: "postgres",
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    },
	define: {
		freezeTableName: true,
		timestamps: false
	}
});





sequelize.define("Pets", {
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idade: {
		type: DataTypes.NUMBER,
		allowNull: false
	},
    especie: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    raca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nomeDono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefoneDono: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
}, {tableName: "public.Pets"});
