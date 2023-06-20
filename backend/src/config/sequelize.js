const { Sequelize } = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    // outras opções, se necessário
  }
);

module.exports = sequelize;

// Teste de conexão com o banco de dados
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Conexão estabelecida com sucesso.");
//   })
//   .catch((error) => {
//     console.error("Erro ao conectar-se ao banco de dados:", error);
//   });
