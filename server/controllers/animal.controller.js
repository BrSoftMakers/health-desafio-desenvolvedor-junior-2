const Animal = require("../models/animal.model");

exports.create = async (req, res) => {
  const animal = {
    nomePet: req.body[0]['nomePet'],
    idadePet: req.body[0]['idadePet'],
    tipo: req.body[0]['tipo'],
    raca: req.body[0]['raca'],
    nomeDono: req.body[0]['nomeDono'],
    telefone: req.body[0]['telefone']        
  };
  const aux = await Animal.create(animal)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erro ao Cadastrar um Pet"
      });
    });
  res.json(aux);
};

exports.findAll = async (req, res) => {
  const animais = await Animal.findAll();
  res.json(animais);
};

exports.update = (req, res) => {
  const id = req.params.id;

  Animal.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) { //Se encontrar pet com id igual ao informado então foi atualizado
        res.send({
          message: "Dados do Pet foram Atualizados"
        });
      } else {
        res.send({
          message: `Não foi possivel atualizar o Pet com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erro ao atualizar o Pet com id=" + id
      });
    });
};

exports.delete = async(req, res) => {
    const idAnimal = req.params.id;
    const aux = await Animal.destroy({where: {id:idAnimal}});
    const animais = await Animal.findAll();
    res.json(animais);
};
