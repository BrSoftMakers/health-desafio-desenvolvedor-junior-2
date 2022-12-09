const { Customer, Pet } = require('../models');

const flattenPetInfo = (pet) => {
  const { id, name, age, species, breed, ownerId, owner: { name: owner, phone } } = pet;

  return { id, name, age, species, breed, ownerId, owner, phone };
};

const getAll = async () => {
  const pets = await Pet.findAll({
    include: { model: Customer, as: 'owner' },
  });

  return pets.map(flattenPetInfo);
};

module.exports = {
  getAll,
};
