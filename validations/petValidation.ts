import { mixed, number, object, string } from 'yup';

const petValidation = object({
  name: string().required(),
  age: number().required().positive().integer(),
  race: string().required(),
  animalType: mixed<'gato' | 'cachorro'>()
    .oneOf(['gato', 'cachorro'] as const)
    .defined(),
  ownerName: string().required(),
  ownerPhone: string().required(),
});

export default petValidation;
