const knex = require('../config/connect');
const keySecret = require('../utils/keySecret');
const jwt = require('jsonwebtoken');


const authentication = async (request, response, next) => {
    const { authorization } = request.headers;

    if (!authorization) {
        return response.status(401).json({ mensagem: "Não autorizado!" })
    }

    try {
        const token = authorization.replace('Bearer ', '').trim();

        const { id } = jwt.verify(token, keySecret);

        const usuario = await knex('usuarios').where({ id }).first();

        if (!usuario) {
            return response.status(401).json({ mansagem: "Não autorizado!." });
        }


        const { senha: senhaa, ...dadosUsuario } = usuario;


        request.usuario = dadosUsuario;

        next();

    } catch (error) {
        return response.status(500).json(`Erro interno: ${error.message}`);
    }

}


module.exports = {
    authentication
}
