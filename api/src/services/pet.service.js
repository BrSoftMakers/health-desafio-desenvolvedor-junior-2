const NotFound = require('../errors/NotFound');
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

const checkPetExistenceBeforeReturning = (pet, returnIfExists = pet) => {
  if (!pet) throw new NotFound('Pet not found');

  return returnIfExists;
};

const getById = async (id) => {
  const pet = await Pet.findByPk(id, {
    include: { model: Customer, as: 'owner' },
  });

  return checkPetExistenceBeforeReturning(pet, flattenPetInfo(pet));
};

const create = async (data) => {
  const { name, age, species, breed, owner, phone } = data;

  const { id: ownerId } = await Customer.create({ name: owner, phone });

  const { dataValues: pet } = await Pet.create(
    { name, age, species, breed, ownerId },
  );

  return { ...pet, owner, phone };
};

const getOwnerId = async (petId, name, phone) => {
  const newOwner = await Customer.findOne({ where: { name } });
  const { ownerId: currentOwnerId } = await Pet.findByPk(petId, { attributes: ['ownerId'] });

  if (!newOwner || newOwner.id === currentOwnerId) {
    const [{ id }] = await Customer.upsert({ name, phone });

    return id;
  }

  return newOwner.id;
};

const update = async (id, data) => {
  const { name, age, species, breed, owner, phone } = data;

  const ownerId = await getOwnerId(id, owner, phone);

  const [pet] = await Pet.update(
    { name, age, species, breed, ownerId },
    { where: { id } },
  );

  return checkPetExistenceBeforeReturning(pet);
};

const remove = async (id) => {
  const pet = await Pet.destroy({ where: { id } });

  return checkPetExistenceBeforeReturning(pet);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
