import * as yup from "yup";

export const createPetSchema = yup.object({
  name: yup
    .string()
    .max(50, "⚠ Máximo de 50 caracteres!")
    .required("⚠ Nome obrigatório!"),
  age: yup.number().required("⚠ Idade obrigatória!"),
  species: yup.string().required("⚠ Espécie obrigatória!"),
  breed: yup
    .string()
    .max(20, "⚠ Máximo de 20 caracteres!")
    .required("⚠ Raça obrigatória!"),
  tutorName: yup
    .string()
    .max(50, "⚠ Máximo de 50 caracteres!")
    .required("⚠ Nome do tutor obrigatório!"),
  image: yup.string().max(120, "⚠ Máximo de 120 caracteres!").notRequired(),
  phoneNumber: yup
    .string()
    .max(15, "⚠ Máximo de 15 caracteres!")
    .required("⚠ Telefone do tutor obrigatório!"),
});
