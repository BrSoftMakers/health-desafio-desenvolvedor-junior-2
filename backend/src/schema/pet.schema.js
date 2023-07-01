const Joi = require('joi');

const petSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  specie: Joi.string().required(),
  breed: Joi.string().required(),
});

module.exports = { petSchema };
