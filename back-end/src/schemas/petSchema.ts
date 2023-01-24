import joi from "joi";

export const postSchema = joi.object({
    name: joi.string().strict().trim().required(),
    age: joi.number().positive().required(),
    type: joi.string().strict().trim().valid("GATO", "CACHORRO").required(),
    breed: joi.string().trim().required(),
    ownerId: joi.number().id().required(),
});
