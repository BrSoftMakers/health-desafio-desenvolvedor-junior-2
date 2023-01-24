import * as yup from 'yup';

export const ownerPet = yup.object().shape({
  name: yup.string().required('*Campo obrigatório'),
  phone_number: yup.string().required('*Campo obrigatório'),
});

export const petValidationSchema = yup.object().shape({
  name: yup.string().required('*Campo obrigatório'),
  age: yup
    .number()
    .typeError('Precisa ser um número')
    .required('*Campo obrigatório')
    .min(0)
    .max(25),
  type: yup.string().required('*Campo obrigatório'),
  breed: yup.string().required('*Campo obrigatório'),
  owner_id: ownerPet,
});
