const { StatusCodes } = require('http-status-codes');

const PetService = require('../services/pet.service');

const getAll = async (_req, res) => {
  const pets = await PetService.getAll();

  return res.json({ pets });
};

const getById = async (req, res) => {
  const { id } = req.params;

  const pet = await PetService.getById(id);

  return res.json(pet);
};

const create = async (req, res) => {
  const { body } = req;

  const pet = await PetService.create(body);

  return res.status(StatusCodes.CREATED).json(pet);
};

const update = async (req, res) => {
  const { params: { id }, body } = req;

  await PetService.update(id, body);

  return res.json({ message: 'Pet updated successfully!' });
};

const remove = async (req, res) => {
  const { id } = req.params;

  await PetService.remove(id);

  return res.json({ message: 'Pet deleted successfully!' });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
