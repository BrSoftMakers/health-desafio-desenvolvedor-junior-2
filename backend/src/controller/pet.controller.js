const PetService = require('../service/pet.service');

const createPet = async (req, res) => {
  try {
    const { name, age, species, breed, ownerId } = req.body;
    const pet = await PetService.createPet({ name, age, species, breed, ownerId });
    return res.status(201).json(pet);
  } catch (error) {
    if (!error.status) {
      console.log(error);
      return res.status(500).json({ statusCode: 500, message: error.message });
    }
    return res
      .status(error.status)
      .json({ statusCode: error.status, message: error.message });
  }
};

const getAllPets = async (_req, res) => {
  return res.status(200).json(await PetService.getAllPets());
};

const getPetUniqueId = async (req, res) => {
  try {
    const { uniqueId } = req.params;
    const pet = await PetService.getPetUniqueId(uniqueId);
    return res.status(200).json(pet);
  } catch (error) {
    if (!error.status) {
      console.log(error);
      return res.status(500).json({ statusCode: 500, message: error.message });
    }
    return res
      .status(error.status)
      .json({ statusCode: error.status, message: error.message });
  }
};

const getPetByOwnerId = async (req, res) => {
  try {
    const { ownerId } = req.params;
    const pet = await PetService.getPetByOwnerId(ownerId);
    return res.status(200).json(pet);
  } catch (error) {
    if (!error.status) {
      console.log(error);
      return res.status(500).json({ statusCode: 500, message: error.message });
    }
    return res.status(error.status).json({ message: error.message });
  }
};

const updatePet = async (req, res) => {
  try {
    const { uniqueId } = req.params;
    const { name, age, specie, breed, ownerId } = req.body;
    const pet = await PetService.updatePet(uniqueId, name, age, specie, breed, ownerId);
    return res.status(200).json(pet);
  } catch (error) {
    if (!error.status) {
      console.log(error);
      return res.status(500).json({ statusCode: 500, message: error.message });
    }
    return res
      .status(error.status)
      .json({ statusCode: error.status, message: error.message });
  }
};

const deletePet = async (req, res) => {
  try {
    const { uniqueId } = req.params;
    await PetService.deletePet(uniqueId);

    return res.status(204).json({ message: 'Pet deleted' });
  } catch (error) {
    if (!error.status) {
      console.log(error);
      return res.status(500).json({ statusCode: 500, message: error.message });
    }
    return res
      .status(error.status)
      .json({ statusCode: error.status, message: error.message });
  }
};

module.exports = {
  createPet,
  getAllPets,
  getPetUniqueId,
  getPetByOwnerId,
  updatePet,
  deletePet,
};
