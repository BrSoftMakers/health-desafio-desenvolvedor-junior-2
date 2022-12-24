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

sequelize.define("Users", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
		type: DataTypes.STRING,
		allowNull: false
	},
	endereco: {
		type: DataTypes.STRING,
		allowNull: false,
	}
}, {tableName: "public.Users"});
