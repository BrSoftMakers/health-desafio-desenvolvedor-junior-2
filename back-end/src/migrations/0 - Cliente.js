/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clientes', {
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

      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },

      contato: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      contato_2: {
        allowNull: true,
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('clientes');
  },
};
