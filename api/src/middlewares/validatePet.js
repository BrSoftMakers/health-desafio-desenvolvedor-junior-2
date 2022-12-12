const Joi = require('joi');

const BadRequest = require('../errors/BadRequest');

const petSchema = Joi.object({
  name: Joi
    .string()
    .pattern(/^(([A-Z\u00C0-\u00DF][a-z\u00E0-\u00FF]+)+( [a-zA-Z\u00C0-\u00FF]+)*)$/)
    .required(),
  age: Joi.number().integer().min(1).required(),
  species: Joi.string().valid('cat', 'dog').required(),
  breed: Joi.string().min(2).required(),
  owner: Joi
    .string()
    .pattern(/^(([A-Z\u00C0-\u00DF][a-z\u00E0-\u00FF]+)+( [a-zA-Z\u00C0-\u00FF]+)+)$/)
    .required(),
  phone: Joi
    .string()
    .pattern(/^\([1-9]{2}\)(\s[9])?\s[1-9]\d{3}-\d{4}$/)
    .required(),
});

module.exports = (req, _res, next) => {
  const { body } = req;

  const { error } = petSchema.validate(body);

  if (error) throw new BadRequest(error.message);

  return next();
};
