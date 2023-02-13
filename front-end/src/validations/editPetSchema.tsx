import * as yup from "yup";

export const editPetSchema = yup.object({
  name: yup.string().max(50, "⚠ Máximo de 50 caracteres!").notRequired(),
  species: yup.string().notRequired(),
  breed: yup.string().max(20, "⚠ Máximo de 20 caracteres!").notRequired(),
  tutorName: yup.string().max(50, "⚠ Máximo de 50 caracteres!").notRequired(),
  image: yup.string().max(120, "⚠ Máximo de 120 caracteres!").notRequired(),
  phoneNumber: yup.string().max(15, "⚠ Máximo de 15 caracteres!").notRequired(),
});
