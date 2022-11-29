import { Sequelize } from "sequelize";
import "dotenv/config";

const { DB_PASS, DB_HOST, DB_PORT, DB_USER } = process.env;


export const database = new Sequelize("petshop", 'postgres', DB_PASS, {
  dialect: "postgres",
  host: DB_HOST,
  port: 5432,
});

database
  .authenticate()
  .then(function () {
    console.log("Conectado ao baanco de dados com sucesso!");
  })
  .catch(function (erro) {
    console.log("Falha ao se conectar com o banco de dados: " + erro);
  });
