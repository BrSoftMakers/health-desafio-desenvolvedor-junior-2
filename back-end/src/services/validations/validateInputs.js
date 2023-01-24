const { registerPetSchema, registerClientSchema } = require('./schemas');

const validadePetRegister = (pet) => {
  const { error } = registerPetSchema.validate(pet);
  if (error) {
    return error.message;
  }

  return null;
};

const validadeClientRegister = (client) => {
  const { error } = registerClientSchema.validate(client);
  if (error) {
    return error.message;
  }

  return null;
};

module.exports = {
  validadePetRegister,
  validadeClientRegister,
};
