import { Sequelize } from "sequelize-typescript";
import "dotenv/config";

export const sequelize = new Sequelize({
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: "postgres",
  port: 5432,
});
