const PetService = require('../services/pet.service');

const getAll = async (_req, res) => {
  const pets = await PetService.getAll();

  return res.json({ pets });
};

module.exports = {
  getAll,
};
