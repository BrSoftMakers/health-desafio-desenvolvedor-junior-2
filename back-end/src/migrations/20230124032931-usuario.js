/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuários', {
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

      senha: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      categoria: {
        allowNull: false,
        type: Sequelize.ENUM('admin', 'funcionário'),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('usuários');
  },
};
