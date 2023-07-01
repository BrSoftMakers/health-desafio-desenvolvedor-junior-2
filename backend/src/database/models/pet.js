'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define(
    'Pet',
    {
      name: DataTypes.STRING,
      species: DataTypes.STRING,
      age: DataTypes.INTEGER,
      breed: DataTypes.STRING,
      ownerId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        field: 'full_name',
      },
    },
    {
      tableName: 'pets_db',
      underscored: true,
    },
  );
  Pet.associate = (models) => {
    Pet.belongsTo(models.Owner, { as: 'owners', foreignKey: 'ownerId' });
  };
  return Pet;
};
