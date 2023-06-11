'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('animal', {
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
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('animal');
  }
};
