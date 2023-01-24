function conflict() {
    return { code: 409, message: "Este CPF já está cadastrado." };
}

function unprocessableEntityError(error: { details: { message: String }[] }) {
    return { code: 422, message: error.details.map((detail) => detail.message) };
}

export const error = {
    conflict,
    unprocessableEntityError,
};
