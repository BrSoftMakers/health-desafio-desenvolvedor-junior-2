import { Sequelize } from "sequelize";
import ENV from "../config/env";

const sequelize = new Sequelize(
  ENV.DB_NAME as string,
  ENV.DB_USER as string,
  ENV.DB_PASS as string,
  {
    dialect: 'postgres',
    host: ENV.DB_HOST,
    port: Number(ENV.DB_PORT)
  })

export default sequelize;
