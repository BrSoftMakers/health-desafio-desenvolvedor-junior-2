const service = require('../services/usuario.service');
const { createToken } = require('../utils/jwtEngine');
require('dotenv').config();

const registerUser = async (req, res) => {
  const request = await service.registerUser(req.body);
  return res.status(201).json(request);
};

const requestLogin = async (req, res) => {
  const { message, user } = await service.requestLogin(req.body);
  const token = createToken(user);

  res.cookie('token', token, {
    maxAge: 3600000,
    httpOnly: true,
    sameSite: process.env.COOKIE_SAME_SITE,
    secure: process.env.COOKIE_SECURE,
  });

  return res.status(200).json({
    nome: user.nome, email: user.email, categoria: user.categoria, auth: true, message,
  });
};

module.exports = {
  registerUser,
  requestLogin,
};
