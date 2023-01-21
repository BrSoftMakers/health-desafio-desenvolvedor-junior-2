import { AppDataSource } from '../../data-source';
import { Pet } from '../../entities/pet.entity';
import { Owner } from '../../entities/petOwner.entity';
import { IOwnerRequest } from '../../interfaces/owner/ownerInterface';
const createOwnerPetService = async (
  ownerData: IOwnerRequest,
  petId: string
): Promise<Owner> => {
  const petRepository = AppDataSource.getRepository(Pet);
  const ownerRepository = AppDataSource.getRepository(Owner);

  const createOwner = ownerRepository.create(ownerData);

  await ownerRepository.save(createOwner);

  await petRepository.update(
    {
      id: petId,
    },
    {
      owner: createOwner,
    }
  );

  return createOwner;
};

export default createOwnerPetService;
