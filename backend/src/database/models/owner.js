'use strict';
module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define(
    'Owner',
    {
      fullName: {
        type: DataTypes.STRING,
        field: 'full_name',
      },
      phone: DataTypes.STRING,
      document: DataTypes.STRING,
    },
    {
      tableName: 'owners_db',
      underscored: true,
    },
  );

  Owner.associate = (models) => {
    Owner.hasMany(models.Pet, {
      onDelete: 'cascade',
      onUpdate: 'cascade',
      as: 'pets',
      foreignKey: 'ownerId',
    });
  };
  return Owner;
};
