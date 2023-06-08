const service = require('../services/cliente.service');

const registerClient = async (req, res) => {
  const request = await service.registerClient(req.body);
  if (request.type) return res.status(request.type).json({ message: request.message });

  return res.status(201).json(request);
};

module.exports = {
  registerClient,
};
