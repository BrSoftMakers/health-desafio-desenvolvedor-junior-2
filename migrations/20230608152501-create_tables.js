'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
      await queryInterface.createTable('Animals', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            nome: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            idade: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            tipo: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            raca: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            nome_dono: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            telefone_dono: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
          }
      )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
      await queryInterface.dropTable('Animals')
  }
};
