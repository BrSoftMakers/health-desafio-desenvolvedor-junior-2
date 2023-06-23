'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pets.init({
    nome: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    eGatoOuCachorro: DataTypes.STRING,
    raca: DataTypes.STRING,
    nomeDoDono: DataTypes.STRING,
    telefoneDeContato: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pets',
  });
  return Pets;
};