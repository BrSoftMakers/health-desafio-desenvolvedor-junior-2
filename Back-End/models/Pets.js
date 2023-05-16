const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('pets', 'postgres', '12345', {
  host: 'localhost',
  dialect: 'postgres',
  query: { raw: true }
});

const Pets = sequelize.define('PetsTeste', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idade: {
    type: DataTypes.BIGINT,
  },
  especie: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  raca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contato: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

// Pets.create({
//   nome: "Lsily",
//   idade: 42,
//   especie: "Cachorro",
//   raca: "Maltês",
//   dono: "Evellyn",
//   contato: "81998738828"
// })


sequelize.sync()
  .then(() => {
    console.log('Tabela criada com sucesso');
  })
  .catch((error) => {
    console.error('Erro ao criar a tabela:', error);
  });

module.exports = Pets;

