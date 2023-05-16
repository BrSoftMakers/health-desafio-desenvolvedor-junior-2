import { mixed, number, object, string } from 'yup';

const petValidation = object({
  name: string().required('Campo nome é obrigatorio'),
  age: number().required().integer().positive('Idade deve ser maior que 0'),
  race: string().required('Campo raça é obrigatorio'),
  animalType: mixed<'gato' | 'cachorro'>()
    .oneOf(['gato', 'cachorro'] as const)
    .defined()
    .typeError('Deve escolher entre gato ou cachorro'),
  ownerName: string().required('Campo Nome do dono é obrigatorio'),
  ownerPhone: string().required('Campo Telefone do dono é obrigatorio'),
});

export default petValidation;
