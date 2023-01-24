const { pet, cliente } = require('../models');
const HttpException = require('../utils/http.exception');
const { validadePetRegister } = require('./validations/validateInputs');

const registerPet = async (body) => {
    const error = validadePetRegister(body);
    if (error) return { type: 400, message: error };

    const newPet = await pet.create(body);
    return newPet;
};


const getAllPets = async () => {
    const request = await pet.findAll();
    return request;
};

const getAPet = async (id) => {
    const request = await pet.findByPk(id, {
        include: {
            model: cliente,
            as: 'tutor',
            attributes: { exclude: ['id', 'contato_2'] },
        },
    });

    if(!request) throw new HttpException(404, 'Pet não localizado');

    return request;
};

const updatePet = async (id, info) => {
    const pet = await getAPet(id);
    if(!pet) throw new HttpException(404, 'Pet não localizado');
    const updatedPet = await pet.update(info, { where: { id } });

    return updatedPet;
}


const removePet = async (id) => {
    const hasPet = await getAPet(id);
    if(!hasPet) throw new HttpException(404, 'Pet não localizado' );
    await pet.destroy({ where: { id } });
    return { message: 'Pet excluido com sucesso' };
};

module.exports = {
    registerPet,
    getAllPets,
    getAPet,
    updatePet,
    removePet,
}