require('dotenv/config')

const Sequelize = require('sequelize');
const configDB = {
  dialect: 'postgres', 
  dialectOptions: {
    ssl: false
    
  }
}

const sequelize = new Sequelize(process.env.DATABASE_URL, configDB);

module.exports = sequelize;