const service = require('../services/usuario.service');
require('dotenv').config();

const registerUser = async (req, res) => {
  const request = await service.registerUser(req.body);
  return res.status(201).json(request);
};

const requestLogin = async (req, res) => {
  const { message, token } = await service.requestLogin(req.body);

  res.cookie('token', token, {
    maxAge: 3600000,
    httpOnly: true,
    sameSite: process.env.COOKIE_SAME_SITE,
    secure: process.env.COOKIE_SECURE,
  });
  return res.status(200).json({ auth: true, message });
};

module.exports = {
  registerUser,
  requestLogin,
};
