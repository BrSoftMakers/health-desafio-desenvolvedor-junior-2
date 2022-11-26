import * as yup from 'yup';
import './yupTranslations';

export const createPetSchemaValidation = yup.object().shape({
  name: yup.string().min(2).required(),
  age: yup.string().min(1).required(),
  catOrDog: yup.string().required(),
  breed: yup.string().min(2).required(),
  owner: yup.string().min(2).required(),
  ownerContact: yup.string().min(2).required(),
});
