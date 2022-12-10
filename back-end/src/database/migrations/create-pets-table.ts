import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
    up: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
        async (transaction) => {
          await queryInterface.createTable('pets', {
            id: {
              type: DataTypes.UUID,
              defaultValue: DataTypes.UUIDV4,
              allowNull: false,
              primaryKey: true,
            },
            nome: {
              type: DataTypes.STRING,
              allowNull: false,
            },
            idade: {
              type: DataTypes.INTEGER,
              allowNull: false,
            },
            tipo: {
              type: DataTypes.INTEGER,
              allowNull: false,
            },
            raca: {
              type: DataTypes.STRING,
              allowNull: false,
            },
            dono: {
              type: DataTypes.STRING,
              allowNull: false,
            },
            telefone: {
              type: DataTypes.STRING,
              allowNull: false,
            },
            createdAt: {
              type: DataTypes.DATE,
              allowNull: false,
            },
            updatedAt: {
              type: DataTypes.DATE,
              allowNull: false,
            }
          });
        }
    ),

    down: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
        async (transaction) => {
          await queryInterface.dropTable('pets');
        }
    )
};