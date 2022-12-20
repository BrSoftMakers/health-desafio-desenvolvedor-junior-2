const knex = require('../config/connect');
const { validateClients } = require('../services/validacao');


const createClients = async (request, response) => {
    const { nome, cpf, telefone, cep, logradouro, complemento, bairro, cidade, estado } = request.body;

    try {
        await validateClients.validate(request.body);

        const cpfExists = await knex('clientes').where({ cpf }).first();
        if (cpfExists) {
            return response.status(400).json({ mensagem: "CPF já existe na base de dados!" });
        }

        const createClient = await knex('clientes').insert({ nome, cpf, telefone, cep, logradouro, complemento, bairro, cidade, estado }).returning('*');
        if (createClient.rowCount == 0) {
            return response.status(400).json({ mensagem: "Cliente não cadastrado!" });
        }

        return response.status(201).json(createClient[0]);

    } catch (error) {
        return response.status(500).json(`Erro interno: ${error.message}`);
    }
}


const updateClient = async (request, response) => {
    const { nome, cpf, telefone, cep, logradouro, complemento, bairro, cidade, estado } = request.body;
    const { id } = request.params;

    try {
        await validateClients.validate(request.body);

        const clientexist = await knex('clientes').where({ id }).first();
        if (!clientexist) {
            return response.status(400).json({ mensagem: "Cliente naõ existe na base de dados!" });
        }

        // const cpfExists = await knex('clientes').where({ cpf }).first();
        // if (cpfExists) {
        //     return response.status(400).json({ mensagem: "CPF já existe na base de dados!" });
        // }

        const updateClient = await knex('clientes').update({ nome, cpf, telefone, cep, logradouro, complemento, bairro, cidade, estado }).where({ id });
        if (updateClient.rowCount == 0) {
            return response.status(400).json({ mensagem: "Cliente não atualizado!" });
        }

        return response.status(204).send();

    } catch (error) {
        return response.status(500).json(`Erro interno: ${error.message}`);
    }

}


const readClient = async (request, response) => {
    const { id } = request.params;

    try {
        const findClient = await knex('clientes').where({ id }).first();
        if (!findClient) {
            return response.status(400).json({ mensagem: "Cliente não encontrado na base de dados!" });
        }

        return response.status(200).json(findClient);

    } catch (error) {
        return response.status(500).json(`Erro interno: ${error.message}`);
    }
}


const readAllClients = async (request, response) => {
    try {

        const readAllClients = await knex.select().table('clientes').orderBy('id', 'asc');
        if (!readAllClients) {
            return response.status(400).json({ mensagem: "Ainda não  existe  clientes na base de dados!" });
        }


        return response.status(200).json(readAllClients)


    } catch (error) {
        return response.status(500).json(`Erro interno: ${error.message}`);
    }


}


const deleteClient = async (request, response) => {
    const { id } = request.params;

    try {
        const findClient = await knex('clientes').where({ id }).first();
        if (!findClient) {
            return response.status(400).json({ mensagem: "Cliente não encontrado na base de dados!" });
        }

        const deleteClient = await knex('clientes').del().where({ id });
        if (!deleteClient) {
            return response.status(404).json({ mensagem: 'Não foi possivel excluir o cliente!' })
        }

        return response.status(200).json({ mensagem: 'Cliente excluído com Sucesso!!' })


    } catch (error) {
        return response.status(500).json(`Erro interno: ${error.message}`);
    }

}




module.exports = {
    createClients,
    updateClient,
    readClient,
    readAllClients,
    deleteClient
}
