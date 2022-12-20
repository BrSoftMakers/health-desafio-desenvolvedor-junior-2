const knex = require('../config/connect');
const keySecret = require('../utils/keySecret');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validateLogin } = require('../services/validacao');


const login = async (request, response) => {
    const { email, senha } = request.body;

    try {
        await validateLogin.validate(request.body);

        const usuario = await knex('usuarios').where({ email }).first();
        if (!usuario) {
            return response.status(400).json({ mensagem: "E-mail ou senha estão incorretos!" });
        }


        const compareSenha = await bcrypt.compare(senha, usuario.senha);

        if (!compareSenha) {
            return response.status(400).json({ mensagem: "E-mail ou senha estão incorretos!" });
        }

        const token = jwt.sign({ id: usuario.id }, keySecret, { expiresIn: '8h' })


        const { senha: senhaa, ...dadosUsuario } = usuario;

        return response.status(200).json({
            usuario: dadosUsuario,
            token: token

        });


    } catch (error) {
        return response.status(500).json(`Erro interno: ${error.message}`)
    }
}




module.exports = {
    login
}
