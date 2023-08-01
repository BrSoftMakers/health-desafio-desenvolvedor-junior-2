const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://userpostgres:a8xefQjyWOT3bIOI68ryw2oEYBkezELb@dpg-cj48f0tgkuvsl0ffg86g-a/petshop_nr7r");
 
module.exports = sequelize;
