'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      idade: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },

      especie: {
        allowNull: false,
        type: Sequelize.ENUM('cachorro', 'gato'),
      },

      id_tutor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'clientes',
          key: 'id',
        },
      },
  });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('petsss');
  }
};
