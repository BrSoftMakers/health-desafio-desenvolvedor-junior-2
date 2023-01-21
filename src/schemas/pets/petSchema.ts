import * as yup from 'yup';
import { IPetResponse } from '../../interfaces/pets/petsInterface';

const returnInfoPetSchema: yup.SchemaOf<IPetResponse> = yup.object().shape({
  id: yup.string().uuid(),
  name: yup.string(),
  age: yup.number(),
  type: yup.string(),
  breed: yup.string(),
  createdAt: yup.date(),
  updatedAt: yup.date(),
});

export { returnInfoPetSchema };
