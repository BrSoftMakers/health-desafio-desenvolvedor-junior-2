import { AppDataSource } from '../../data-source';
import { Pet } from '../../entities/pet.entity';
import { Owner } from '../../entities/petOwner.entity';

const createPetService = async ({
  name,
  age,
  type,
  breed,
  owner_id,
}): Promise<Pet> => {
  const ownerRepository = AppDataSource.getRepository(Owner);
  const petRepository = AppDataSource.getRepository(Pet);

  const createOwnerPet = ownerRepository.create({
    name: owner_id.name,
    phone_number: owner_id.phone_number,
  });

  await ownerRepository.save(createOwnerPet);

  const createPet = petRepository.create({
    name,
    age,
    type,
    breed,
    owner: createOwnerPet,
  });

  await petRepository.save(createPet);

  return createPet;
};

export default createPetService;
