import joi from "joi";

export const postSchema = joi.object({
    name: joi.string().trim().strict().required().messages({
        "string.empty": "Informe o nome",
    }),
    phoneNumber: joi.string().trim().strict().required().messages({
        "string.empty": "Informe o número do telefone.",
    }),
    CPF: joi.string().trim().strict().length(11).required(),
});
