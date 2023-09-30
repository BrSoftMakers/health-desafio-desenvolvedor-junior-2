const sequelize = require('../config/sequelize');

const { DataTypes } = require('sequelize');

const petsModel = sequelize.define('pet', {
    
    petId :{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    petName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    petAge: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    petType: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    petRace: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    photoLink: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    petOwner: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    phoneOwner: {
        type: DataTypes.STRING(15),
        allowNull: false
    }
},
    {
        tableName: 'pet',
        timestamps: true,
        paranoid: true
    });

module.exports = petsModel;