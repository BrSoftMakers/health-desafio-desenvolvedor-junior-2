require('./dotenv');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    username: process.env.DB_USER,
    dialect: process.env.DB_DIALECT,
    ssl: process.env.NODE_ENV === 'production' ? true : false,
    dialectOptions: {
        ssl: process.env.NODE_ENV === 'production' ? { require: true, rejectUnauthorized: false } : false
    },
    pool: {
        max: 5, // Número máximo de conexões no pool
        min: 0, // Número mínimo de conexões no pool
        acquire: 30000, // Tempo máximo (em milissegundos) para adquirir uma conexão
        idle: 10000 // Tempo máximo (em milissegundos) que uma conexão pode ficar ociosa antes de ser desconectada
    }
});

module.exports = sequelize;