"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("CREATE DATABASE petshop;");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("DROP DATABASE petshop;");
  },
};
