const Joi = require('joi');

const petSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  species: Joi.string().required(),
  breed: Joi.string().required(),
  ownerId: Joi.number().required(),
});

module.exports = { petSchema };
