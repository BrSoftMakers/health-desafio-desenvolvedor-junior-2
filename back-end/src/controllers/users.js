const knex = require('../config/connect');
const bcrypt = require('bcrypt');
const { validateAddUsers } = require('../services/validacao');


const createUsers = async (request, response) => {
    const { nome, email, senha } = request.body;

    try {
        await validateAddUsers.validate(request.body);

        const existsUser = await knex('usuarios').where({ email }).first();

        if (existsUser) {
            return response.status(400).json({ mensagem: "Usuário já existente!" })
        }

        const hash = await bcrypt.hash(senha, 10);

        const createUser = await knex('usuarios').insert({ nome, email, senha: hash }).returning('*');

        if (createUser.rowCownt <= 0) {
            return response.status(400).json({ mensagem: "Não foi possível cadastrar usuário!" })
        }

        const { senha: senhaa, ...dadosUsuario } = createUser[0];

        return response.status(201).json(dadosUsuario);


    } catch (error) {
        return response.status(500).json(`Erro interno: ${error.message}`);
    }

}


const updateUser = async (request, response) => {
    const { nome, email, senha } = request.body;
    const { id } = request.params;


    try {
        await validateAddUsers.validate(request.body);

        const existsUser = await knex('usuarios').where({ email }).first();

        if (existsUser) {
            return response.status(400).json({ mensagem: "E-mail já existe na base de dados!" });
        }

        const hash = await bcrypt.hash(senha, 10);

        const updateUser = await knex('usuarios').update({ nome, email, senha: hash }).where({ id });

        if (!updateUser) {
            return response.status(400).json({ mensagem: "Usuario não atualizado" });
        }

        return response.status(204).send();


    } catch (error) {
        return response.status(500).json(`Erro interno: ${error.message}`);
    }

}


module.exports = {
    createUsers,
    updateUser

}
