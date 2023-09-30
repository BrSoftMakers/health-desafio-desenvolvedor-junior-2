const sequelize = require('./sequelize');

// officesModel.hasMany(employeesModel, {foreignKey:'officeCode'});
// employeesModel.belongsTo(officesModel, {foreignKey: 'officeCode'});

sequelize.sync();