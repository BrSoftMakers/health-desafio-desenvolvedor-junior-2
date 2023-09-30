const sequelize = require('../config/sequelize');
const bcrypt = require("bcryptjs");
const { DataTypes } = require('sequelize');

const authModel = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        Limit: 5
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        // unique: true
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
},
{
    tableName: 'user'
});

authModel.beforeCreate(async (user, options) => {
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
});

module.exports = authModel;