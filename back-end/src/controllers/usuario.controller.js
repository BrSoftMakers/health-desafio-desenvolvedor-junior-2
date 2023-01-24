const service = require('../services/usuario.service').default;

const registerUser = async (req, res) => {
  const request = await service.registerUser(req.body);
  return res.status(201).json(request);
};

module.exports = {
  registerUser,
};
