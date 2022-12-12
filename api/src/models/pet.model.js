module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    species: DataTypes.ENUM('cat', 'dog'),
    breed: DataTypes.STRING,
    ownerId: { type: DataTypes.INTEGER, foreignKey: true },
  }, {
    timestamps: false,
    tableName: 'pets',
    underscored: true,
  });

  Pet.associate = (models) => {
    Pet.belongsTo(
      models.Customer,
      { foreignKey: 'ownerId', as: 'owner' },
    );
  };

  return Pet;
};
