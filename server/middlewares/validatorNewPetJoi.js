const Joi = require('joi');

const newPet = Joi.object({
  nome: Joi.string().required(),
  idade: Joi.number().integer().min(1).max(100).required(),
  eGatoOuCachorro: Joi.string().required(),
  raca: Joi.string().required(),
  nomeDoDono: Joi.string().required(),
  telefoneDeContato: Joi.string(),
});

const createPetValid = (req, res, next) => {
  const { error } = newPet.validate(req.body);
  if (!error) return next();

  const [message] = error.details.map((e) => e.message);
  return res.status(400).json({ message });
};

module.exports = createPetValid;