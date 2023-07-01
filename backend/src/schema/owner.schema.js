const Joi = require('joi');

const ownerSchema = Joi.object({
  fullName: Joi.string().required(),
  phone: Joi.number().required(),
  document: Joi.string().required(),
});

module.exports = { ownerSchema };
