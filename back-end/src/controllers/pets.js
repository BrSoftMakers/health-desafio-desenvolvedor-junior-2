const { request } = require('express');
const knex = require('../config/connect');
const { validatePets } = require('../services/validacao');


const createPets = async (request, response) => {
    let { cliente_id, nome, idade, tipo, raca } = request.body;

    try {
        await validatePets.validate(request.body);

        const clientExists = await knex.select().table('pets').where({ cliente_id }).first();
        if (clientExists <= 0) {
            return response.status(400).json({ mensagem: "Cliente não encontrado" })
        }

        const createPet = await knex('pets').insert({ cliente_id, nome, idade, tipo, raca }).returning('*');
        if (createPet.rowCount <= 0) {
            return response.status(400).json("Pet não cadastrado!")
        }

        return response.status(201).json(createPet)


    } catch (error) {
        return response.status(500).json(`Erro interno: ${error.message}`);
    }
}


const readPet = async (request, response) => {
    const { id } = request.params;

    try {
        const petExists = await knex('pets').where({ id }).first();
        if (!petExists) {
            return response.status(400).json("Pet não encontrado!")
        }

        return response.status(200).json(petExists);

    } catch (error) {
        return response.status(500).json(`Erro interno: ${error.message}`);
    }

}


const updatePet = async (request, response) => {
    const { id } = request.params;
    let { cliente_id, nome, idade, tipo, raca } = request.body;

    try {
        await validatePets.validate(request.body);

        const petExists = await knex('pets').where({ id }).first();
        if (!petExists) {
            return response.status(400).json({ mensagem: "Pet não encontrado" })
        }

        const updatePet = await knex('pets').update({ cliente_id, nome, idade, tipo, raca }).where({ id });
        if (updatePet.rowCount <= 0) {
            return response.status(400).json({ mensagem: "Pet não atualizado" });
        }

        return response.status(204).send();

    } catch (error) {
        return response.status(500).json(`Erro interno: ${error.message}`);
    }
}


const readAllPets = async (request, response) => {
    try {
        const readAllPets = await knex.select().table('pets').orderBy('id', 'asc');

        return response.status(200).json(readAllPets);

    } catch (error) {
        return response.status(500).json(`Erro interno: ${error.message}`);
    }

}


const deletePet = async (request, response) => {
    const { id } = request.params;

    try {
        const petExists = await knex('pets').where({ id }).first();
        if (!petExists) {
            return response.status(400).json({ mensagem: "Pet não encontrado" })
        }

        const deletePet = await knex('pets').del().where({ id });
        if (!deletePet) {
            return response.status(400).json({ mensagem: "Pet não encontrado" })
        }

        return response.status(200).json({ mensagem: "Deletado com Sucesso!" });


    } catch (error) {
        return response.status(500).json(`Erro interno: ${error.message}`);
    }

}



module.exports = {
    createPets,
    readPet,
    updatePet,
    readAllPets,
    deletePet
};
