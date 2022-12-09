module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true },
    phone: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'customers',
  });

  Customer.associate = (models) => {
    Customer.hasOne(
      models.Pet,
      { foreignKey: 'ownerId' },
    );
  };

  return Customer;
};
