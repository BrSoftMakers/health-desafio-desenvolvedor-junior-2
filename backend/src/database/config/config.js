require('dotenv').config();

module.exports = {
  development: {
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PWD,
    database: 'petshop_db',
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
  },
  test: {
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PWD,
    database: 'petshop_db',
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
  },
  production: {
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PWD,
    database: 'petshop_db',
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
  },
};
