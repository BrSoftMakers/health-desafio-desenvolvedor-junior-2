const Sequelize = require('sequelize');
const sequelize = new Sequelize('railway', 'connect', 'Postgres', {
  host: 'localhost',
  dialect: 'postgres',
  query: { raw: true }
})

/* Teste de conexão com o banco de dados Postgres
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
*/
module.exports = {
  Sequelize,
  sequelize
}