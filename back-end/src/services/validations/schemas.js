const Joi = require('joi');

const registerPetSchema = Joi.object({
  nome: Joi.string().pattern(/^[A-Z][a-zA-Z]*$/).required(),
  idade: Joi.number().positive().min(0).required(),
  especie: Joi.string().valid('cachorro', 'gato').required(),
  id_tutor: Joi.number().min(1).required(),
});

const registerClientSchema = Joi.object({
  nome: Joi.string().pattern(/^([A-Z][a-z]+)\s([A-Z][a-z]+)$/).required(),
  email: Joi.string().email().required(),
  contato: Joi.string().pattern(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/).required(),
  contato_2: Joi.string().pattern(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/),
});
module.exports = {
  registerPetSchema,
  registerClientSchema,
};
