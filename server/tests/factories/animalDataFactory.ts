import { faker } from '@faker-js/faker';

export default async function __animalDataFactory() {
  return {
    animalName: faker.person.firstName(),
    ownerName: faker.person.fullName(),
    fone: faker.string.numeric(),
    type: 'dog',
    race: faker.animal.dog(),
    animalAge: faker.number.int(),
  };
}
