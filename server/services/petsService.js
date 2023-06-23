const { Pets } = require('../models'); 

async function readAll() {
  return await Pets.findAll();
}

async function read(id) {
  return await Pets.findOne({ where: { id } });
}

async function create({ nome, idade, eGatoOuCachorro, raca, nomeDoDono, telefoneDeContato }) {
  const response = await Pets.create({ nome, idade, eGatoOuCachorro, raca, nomeDoDono, telefoneDeContato });
  return response;
}

async function update(id, { nome, idade, eGatoOuCachorro, raca, nomeDoDono, telefoneDeContato }) {
  const response = await Pets.update(
    { nome, idade, eGatoOuCachorro, raca, nomeDoDono, telefoneDeContato },
    { where: { id } }
  );
  return response;
}

async function del(id) {
  return await Pets.destroy({ where: { id } });
}

module.exports = { 
  readAll,
  read,
  create,
  update,
  del
}