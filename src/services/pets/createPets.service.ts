import { AppDataSource } from '../../data-source';
import { Pet } from '../../entities/pet.entity';
import { Owner } from '../../entities/petOwner.entity';
import { AppError } from '../../errors/App.error';
import { IPetRequest } from '../../interfaces/pets/petsInterface';

const createPetService = async (
  petData: IPetRequest,
  ownerId: string
): Promise<Pet> => {
  const ownerRepository = AppDataSource.getRepository(Owner);
  const petRepository = AppDataSource.getRepository(Pet);

  const owner = await ownerRepository.findOneBy({
    id: ownerId,
  });

  if (owner) {
    throw new AppError('Owner Already Exists', 409);
  }

  if (!owner.phone_number) {
    throw new AppError('Invalid Phone number', 404);
  }

  const createPet = petRepository.create({
    ...petData,
    owner,
  });

  await petRepository.save(createPet);

  return createPet;
};

export default createPetService;
