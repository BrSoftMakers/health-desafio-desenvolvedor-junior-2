const db = require("../models");
const Cadastro = db.cadastros;
const Op = db.Sequelize.Op;

// Criar e salvar cadastro
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nome) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Criar Cadastro
  const cadastro = {
    codigo: req.body.codigo,
    nome: req.body.nome,
    idade: req.body.idade,
    tipo: req.body.tipo,
    raca: req.body.raca,
    nomedono: req.body.nomedono,
    telefone: req.body.telefone,
  };

  // Salvar cadastro no database
  Cadastro.create(cadastro)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erro."
      });
    });
};

exports.findAll = (req, res) => {
  const nome = req.query.nome;
  var condition = nome ? { nome: { [Op.iLike]: `%${nome}%` } } : null;

  Cadastro.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erro!"
      });
    });
};

// Encontrar um cadastro com id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Cadastro.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Encontrado um cadastro com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erro ao recuperar cadastro com id=" + id
      });
    });
};

// Atualizar um cadastro pelo id na solicitação
exports.update = (req, res) => {
  const id = req.params.id;

  Cadastro.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "O cadastro foi atualizado com sucesso."
        });
      } else {
        res.send({
          message: `Não é possível atualizar o cadastro com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erro ao atualizar o cadastro com id=" + id
      });
    });
};

// Excluir um cadastro com o ID especificado na solicitação
exports.delete = (req, res) => {
  const id = req.params.id;

  Cadastro.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "O cadastro foi deletado com sucesso!"
        });
      } else {
        res.send({
          message: `Não é possível excluir o cadastro com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Não foi possível excluir o cadastro com id=" + id
      });
    });
};

// Delete
exports.deleteAll = (req, res) => {
  Cadastro.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Deletado com sucesso!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erro!"
      });
    });
};
