const petsModel = require('../models/petsModel');

exports.getAllPets = async () => {
    const pets = petsModel.findAll();
    return pets;
};

exports.getPetByPetId = async (petId) => {
    const pet = await petsModel.findByPk(petId);
    return pet;
};

exports.createPet = async (pet) => {
    const newPet = await petsModel.create(pet);
    return newPet;
};

exports.updatePet = async (petId, pet) => {
    const updatePet = await petsModel.update(pet, {
        where:{
            petId
        }
    });
    return updatePet;
};

exports.deletePet = async (petId) => {
    const deletePet = petsModel.destroy(
    {
        where: {
            petId
        }
    });
    return deletePet;
};