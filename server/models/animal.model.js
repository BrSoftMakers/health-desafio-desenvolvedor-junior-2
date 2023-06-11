const database = require('../db');
const Sequelize = require('sequelize');

const Animal = database.define('animal', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomePet: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idadePet: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tipo: {
        type: Sequelize.ENUM(["gato","cachorro"]),
        allowNull: false
    },
    raca: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nomeDono: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.BIGINT,
        allowNull: false
    }
},{tableName: 'animal',timestamps:false})

module.exports = Animal;