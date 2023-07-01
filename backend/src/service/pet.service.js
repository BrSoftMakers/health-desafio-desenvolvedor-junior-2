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
        ? gnerateRandomUniqueIndetify('C')
        : gnerateRandomUniqueIndetify('D'),
    ownerId,
  };

  return await Pet.create(data);
};

const getAllPets = async () => {
  return await Pet.findAll();
};

const getPetUniqueId = async (code) => {
  const pet = await Pet.findOne({
    where: { uniqueIndentifier: code },
    include: ['owners'],
  });
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

const updatePet = async (code, name, age, specie, breed) => {
  const pet = await Pet.findOne({ where: { uniqueIndentifier: code } });
  if (!pet) {
    throw errorBase('Pet not found', 404);
  }
  return await pet.update({ name, age, specie, breed }, { where: { id: pet.id } });
};

const deletePet = async (uniqueId) => {
  const pet = await Pet.findOne({ where: { uniqueIndentifier: uniqueId } });
  if (!pet) {
    throw errorBase('Pet not found', 404);
  }
  return await pet.destroy();
};

module.exports = {
  createPet,
  getAllPets,
  getPetUniqueId,
  getPetByOwnerId,
  updatePet,
  deletePet,
};
