import * as yup from 'yup';
import {
  IOwnerRequest,
  IOwnerResponse,
} from '../../interfaces/owner/ownerInterface';

const responseOwnerSchema: yup.SchemaOf<IOwnerResponse> = yup.object().shape({
  id: yup.string().notRequired(),
  name: yup.string().notRequired(),
  phone_number: yup.string().notRequired(),
  createdAt: yup.date().notRequired(),
});

const ownerSchema: yup.SchemaOf<IOwnerRequest> = yup.object().shape({
  name: yup.string().required(),
  phone_number: yup.string().required(),
});

export { ownerSchema, responseOwnerSchema };
