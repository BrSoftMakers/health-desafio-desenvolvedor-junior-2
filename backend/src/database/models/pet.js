'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define(
    'Pet',
    {
      name: DataTypes.STRING,
      species: DataTypes.STRING,
      age: DataTypes.INTEGER,
      breed: DataTypes.STRING,
      uniqueIndentifier: DataTypes.STRING,
      ownerId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        field: 'owner_id',
      },
    },
    {
      tableName: 'pets_db',
      underscored: true,
    },
  );
  Pet.associate = (models) => {
    Pet.belongsTo(models.Owner, {
      onDelete: 'cascade',
      onUpdate: 'cascade',
      as: 'owners',
      foreignKey: 'ownerId',
    });
  };
  return Pet;
};
