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

module.exports = {
  getAll,
  getById,
};
