const sequelize = require('../../configDB');

const Sequelize = require('sequelize');


const Pet = sequelize.define('Pets', {
  name: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  type: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  breed: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  breedId: {
    type: Sequelize.STRING(30),
    allowNull: false,
  },
  ownerName: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },

  ownerTelNumber: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  imageURL: {
    type: Sequelize.STRING(300),
    allowNull: false,
  }
});


module.exports = {
  Pet,
  sequelize
}