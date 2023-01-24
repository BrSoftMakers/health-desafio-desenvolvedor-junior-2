const Joi = require('joi');

const registerPetSchema = Joi.object({
    nome: Joi.string().min(3).required(),
    idade: Joi.number().positive().min(0).required(),
    especie: Joi.string().valid('cachorro', 'gato').required(),
    id_tutor: Joi.number().min(1).required(),
});

module.exports = {
    registerPetSchema,
}