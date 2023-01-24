const service = require('../services/pet.service');

const registerPet = async (req, res) => {
    const request = await service.registerPet(req.body);
    if(request.type) return res.status(request.type).json({ message: request.message });
    return res.status(201).json(request);
}

const getAllPets = async (_req, res) => {
    const pets = await service.getAllPets();
    return res.status(200).json(pets);
};

const getAPet = async (req, res) => {
    const { id } = req.params;
    const request = await service.getAPet(id);
    return res.status(200).json(request);
};

const updatePet = async (req, res) => {
    const { params: { id }, body } = req;
    const request = await service.updatePet(id, body);
    return res.status(200).json(request);
};

const removePet = async (req, res) => {
    const { params: { id } } = req;
    const request = await service.removePet(id);
    return res.status(200).json(request);
}

module.exports = {
    registerPet,
    getAllPets,
    getAPet,
    updatePet,
    removePet,
}