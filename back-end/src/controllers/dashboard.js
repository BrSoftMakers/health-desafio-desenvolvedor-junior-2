const knex = require('../config/connect');

const dashboard = async (request, response) => {
    try {

        const dashboard = await knex.select(['pets.nome as pet_nome', 'pets.raca', 'pets.tipo', 'clientes.nome', 'clientes.telefone']).table('clientes')
            .innerJoin('pets', 'pets.cliente_id', 'clientes.id')

        if (!dashboard) {
            return response.status(400).json({ mensagem: "Não foi possivel exibir o dashboard" })
        }

        return response.status(200).json(dashboard)

    } catch (error) {
        return response.status(500).json(`Erro interno: ${error.message}`);
    }
}

module.exports = dashboard;
