import * as yup from "yup";
import { SchemaOf } from "yup";
import { iPetRequest, iPetUpdate } from "../interfaces/pets.interfaces";

export const petSerializer: SchemaOf<iPetRequest> = yup.object().shape({
  name: yup.string().max(50).required(),
  age: yup.number().required(),
  species: yup.string().max(10).required(),
  breed: yup.string().max(20).required(),
  tutorName: yup.string().max(50).required(),
  phoneNumber: yup.string().max(15).required(),
  image: yup.string().max(120).notRequired(),
});

export const petUpdateSerializer: SchemaOf<iPetUpdate> = yup.object().shape({
  name: yup.string().max(50).notRequired(),
  age: yup.number().notRequired(),
  species: yup.string().max(10).notRequired(),
  breed: yup.string().max(20).notRequired(),
  tutorName: yup.string().max(50).notRequired(),
  phoneNumber: yup.string().max(15).notRequired(),
  image: yup.string().max(120).notRequired(),
});
