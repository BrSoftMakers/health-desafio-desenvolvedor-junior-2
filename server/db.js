const Sequelize = require('sequelize');
const sequelize = new Sequelize("petshop", "postgres", "1", {
    host: "localhost",
    dialect: "postgres",
    port: "5433",
    operatorsAliases: false,
  
    
  });
 
module.exports = sequelize;

