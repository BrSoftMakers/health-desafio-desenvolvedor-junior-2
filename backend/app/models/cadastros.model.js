module.exports = (sequelize, Sequelize) => {
  const Cadastro = sequelize.define("cadastro", {
    codigo: {
      type: Sequelize.STRING
    },
    nome: {
      type: Sequelize.STRING
    },
    idade: {
      type: Sequelize.STRING
    },
    tipo: {
      type: Sequelize.STRING
    },
    raca: {
      type: Sequelize.STRING
    },
    nomedono: {
      type: Sequelize.STRING
    },
    telefone: {
      type: Sequelize.STRING
    }
  });

  return Cadastro;
};
