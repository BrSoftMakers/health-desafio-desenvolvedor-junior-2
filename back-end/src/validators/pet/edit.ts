import { validate, Joi } from "express-validation";

const EditPetValidator = validate({
  body: Joi.object({
    nome: Joi.string().min(2).required(),
    idade: Joi.number().integer().required(),
    tipo: Joi.number().integer().min(0).max(1).required(),
    raca: Joi.string().required(),
    dono: Joi.string().min(2).required(),
    telefone: Joi.string().required()
  }),
})

export default EditPetValidator;