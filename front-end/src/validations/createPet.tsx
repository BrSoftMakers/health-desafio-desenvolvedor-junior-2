import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("⚠ Nome obrigatório!"),
  age: yup.number().required("⚠ Idade obrigatória!"),
});
