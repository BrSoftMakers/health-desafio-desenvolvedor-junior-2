const petsRepository = require('../repositories/petsRepository');

exports.getAllPets = async (req, res) => {
    const pets = await petsRepository.getAllPets();
    res.json(pets);
};

exports.getPetByPetId = async (req, res) => {
    const petId = (req.params.petId);
    const pet = await petsRepository.getPetByPetId(petId);
    res.json(pet);
};

exports.createPet = async (req, res) => {
    const newPet = req.body;
    const pet = await petsRepository.createPet(newPet);
    res.status(200).json(pet);
};

exports.updatePet = async (req, res) => {
    const petId = (req.params.petId);
    const updatePet = req.body;
    await petsRepository.updatePet(petId, updatePet);
    res.status(200).json({message: "Atualizado com sucesso!"});
};

exports.deletePet = async (req, res) => {
    const petId = (req.params.petId);
    await petsRepository.deletePet(petId);
    res.json({sucess: "Excluído com sucesso"});
};