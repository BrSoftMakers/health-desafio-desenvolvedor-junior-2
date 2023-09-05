"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Pets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      petName: {
        type: Sequelize.STRING,
      },
      petAge: {
        type: Sequelize.FLOAT,
      },
      petType: {
        type: Sequelize.ENUM("gato", "cachorro"),
      },
      petBreed: {
        type: Sequelize.STRING,
      },
      petOwner: {
        type: Sequelize.STRING,
      },
      petOwnerPhone: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Pets");
  },
};
