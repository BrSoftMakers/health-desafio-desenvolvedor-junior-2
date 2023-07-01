const { Pet } = require('../database/models');
const { errorBase } = require('../utils/error-base');
const { gnerateRandomUniqueIndetify } = require('../utils/unique-indentify');

const createPet = async ({ name, age, species, breed, ownerId }) => {
  const data = {
    name,
    age,
    species,
    breed,
    uniqueIndentifier:
      species === 'gato'
        ? `C-${gnerateRandomUniqueIndetify()}`
        : `D-${gnerateRandomUniqueIndetify()}`,
    ownerId,
  };

  return await Pet.create(data);
};

const getAllPets = async () => {
  return await Pet.findAll();
};

const getPetById = async (id) => {
  const pet = await Pet.findByPk(id, { include: ['owner'] });
  if (!pet) {
    throw errorBase('Pet not found', 404);
  }
  return pet;
};

const getPetByOwnerId = async (ownerId) => {
  const pet = await Pet.findAll({ where: { ownerId } });

  if (!pet) {
    throw errorBase('Pet not found', 404);
  }
  return pet;
};

const updatePet = async (id, name, age, specie, breed, ownerId) => {
  const pet = await Pet.findByPk(id);
  if (!pet) {
    throw errorBase('Pet not found', 404);
  }
  return await pet.update({ name, age, specie, breed, ownerId });
};

const deletePet = async (id) => {
  const pet = await Pet.findByPk(id);
  if (!pet) {
    throw errorBase('Pet not found', 404);
  }
  return await pet.destroy();
};

module.exports = {
  createPet,
  getAllPets,
  getPetById,
  getPetByOwnerId,
  updatePet,
  deletePet,
};
