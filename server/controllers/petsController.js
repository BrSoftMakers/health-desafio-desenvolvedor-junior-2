const service = require('../services/petsService');

async function readAll(_req, res) {
  const response = await service.readAll();
  res.status(200).send(response);
}

async function read(req, res) {
  const response = await service.read(req.params.id);
  res.status(200).json(response);
}

async function create(req, res) {
  const response = await service.create(req.body);
  res.status(201).json({message: 'Pet registrado com sucesso', response: response, registred: true});
}

async function update(req, res) {
  const response = await service.update(req.params.id, req.body);
  res.status(201).json({message: 'Registro de pet atualizado com sucesso', response: response, registred: true});
}

async function del(req, res) {
  const response = await service.del(req.params.id);
  res.status(201).json({message: 'Registro de pet deletado com sucesso', response: response});
}

module.exports = { 
  readAll,
  read,
  create,
  update,
  del
}