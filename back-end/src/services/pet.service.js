const { pets, clientes } = require('../models');
const HttpException = require('../utils/http.exception');
const { validadePetRegister } = require('./validations/validateInputs');

const registerPet = async (pet) => {
    const error = validadePetRegister(pet);
    if (error) return { type: 400, message: error };

    const newPet = await pets.create();
    return newPet;
};


const getAllPets = async () => {
    const pets = await pets.findAll();
    return pets;
};

const getAPet = async (id) => {
    const pet = await pets.findByPk(id, {
        include: {
            model: clientes,
            as: 'tutor',
            attributes: { exclude: ['id', 'contato_2'] },
        },
    });

    return pet;
};

const updatePet = async (id, info) => {
    const pet = await getAPet(id);
    if(!pet) throw new HttpException(404, 'Pet não localizado');
    const updatedPet = await pets.update(id, info);

    return updatedPet;
}


const destroy = async (id) => {
    const hasPet = await getAPet(id);
    if(!hasPet) throw new HttpException(404, 'Pet não localizado' );
    await pets.remove(id);
    return { message: 'Pet excluido com sucesso' };
};

module.exports = {
    registerPet,
    getAllPets,
    getAPet,
    updatePet,
    destroy,
}