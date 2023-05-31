import { faker } from '@faker-js/faker';

export default async function __ownerFactory() {
  return {
    name: faker.person.fullName(),
    fone: faker.string.numeric(),
  };
}
