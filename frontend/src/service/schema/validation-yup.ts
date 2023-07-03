import * as Yup from 'yup';

export const RegisterPetSchema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  age: Yup.string().required('Campo obrigatório'),
  species: Yup.string().required('Campo obrigatório'),
  breed: Yup.string().required('Campo obrigatório'),
  fullName: Yup.string().required('Campo obrigatório'),
  document: Yup.string().required('Campo obrigatório'),
  phone: Yup.string().required('Campo obrigatório'),
});
