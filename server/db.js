const Sequelize = require('sequelize');
const sequelize = new Sequelize("petshop_nr7r", "userpostgres", "a8xefQjyWOT3bIOI68ryw2oEYBkezELb", {
    host: "dpg-cj48f0tgkuvsl0ffg86g-a",
    dialect: "postgres",
    port: "5432",
    operatorsAliases: false,
  
    
  });
 
module.exports = sequelize;
