const service = require('../services/usuario.service');

const registerUser = async (req, res) => {
  const request = await service.registerUser(req.body);
  return res.status(201).json(request);
};

const requestLogin = async (req, res) => {
  const request = await service.requestLogin(req.body);

  return res.status(200).json(request);
};

module.exports = {
  registerUser,
  requestLogin,
};
