module.exports = (sequelize, DataTypes) => {
    const Pet = sequelize.define('pet', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nome: DataTypes.STRING,
      idade: DataTypes.INTEGER,
      especie: DataTypes.ENUM('cat', 'dog'),
      id_tutor: DataTypes.INTEGER,
    }, {
        tableName: 'pets',
      timestamps: false,
    });
  
    Pet.associate = (models) => {
      Pet.belongsTo(
        models.cliente, { 
          foreignKey: 'id_tutor',
          as: 'tutor',
        },
      );
    };
  
    return Pet;
  };
  