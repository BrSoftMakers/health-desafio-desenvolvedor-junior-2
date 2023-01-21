import { AppDataSource } from '../../data-source';
import { Pet } from '../../entities/pet.entity';
import { IPetResponse } from '../../interfaces/pets/petsInterface';
import { returnInfoPetSchema } from '../../schemas/pets/petSchema';

const listPetByIdService = async (petId: string): Promise<IPetResponse> => {
  const petRepository = AppDataSource.getRepository(Pet);

  const findPetId = await petRepository.findOneBy({
    id: petId,
  });

  const returnedPet = returnInfoPetSchema.validate(findPetId, {
    stripUnknown: true,
  });

  return returnedPet;
};

export default listPetByIdService;
