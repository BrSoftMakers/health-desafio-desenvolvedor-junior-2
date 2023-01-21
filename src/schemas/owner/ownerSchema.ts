import * as yup from 'yup';
import { IOwnerRequest } from '../../interfaces/owner/ownerInterface';

const ownerSchema: yup.SchemaOf<IOwnerRequest> = yup.object().shape({
  name: yup.string().required(),
  phone_number: yup.string().required(),
});

export { ownerSchema };
