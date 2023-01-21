import {
  IPetRequest,
  IUpdatePet,
} from '../../../interfaces/pets/petsInterface';

const mockedPet: IPetRequest = {
  name: 'Ichigo',
  age: 5,
  type: 'Ave',
  breed: 'N/A',
  owner_id: {
    name: 'Carlos',
    phone_number: '88994553030',
  },
};

const mockedUpdatedPet: IUpdatePet = {
  name: 'Ichigo',
  age: 3,
};

export { mockedPet, mockedUpdatedPet };
