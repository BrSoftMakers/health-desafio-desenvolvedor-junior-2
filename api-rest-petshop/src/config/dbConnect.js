import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize("postgres://postgres:root@localhost:5432/postgres", {dialect: 'postgres'})

export default sequelize;