const { registerPetSchema } = require("./schemas")

const validadePetRegister = (pet) => {
    const { error } = registerPetSchema.validate(pet);
    if (error) {
        return error.message;
    };
};

module.exports = {
    validadePetRegister,
}