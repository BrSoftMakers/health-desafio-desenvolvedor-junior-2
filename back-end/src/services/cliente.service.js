const { cliente } = require('../models');
const HttpException = require('../utils/http.exception');
const { validadeClientRegister } = require('./validations/validateInputs');

const registerClient = async (body) => {
  const isAlreadyAClient = await cliente.findOne({ where: { email: body.email } });
  const error = validadeClientRegister(body);
  if (error) return { type: 400, message: error };

  if (isAlreadyAClient) throw new HttpException(409, 'O email fornecido já existe no sistema');

  const newClient = await cliente.create(body);

  return newClient;
};

module.exports = {
  registerClient,
};
