import { AppDataSource } from '../../data-source';
import { Pet } from '../../entities/pet.entity';
import { IPetResponse, IUpdatePet } from '../../interfaces/pets/petsInterface';
import { returnInfoPetSchema } from '../../schemas/pets/petSchema';

const updatedPetService = async (
  petData: IUpdatePet,
  petId: string
): Promise<IPetResponse> => {
  const petRepository = AppDataSource.getRepository(Pet);

  const findPetId = await petRepository.findOneBy({
    id: petId,
  });

  const updatedPet = petRepository.create({
    ...findPetId,
    ...petData,
  });

  await petRepository.save(updatedPet);

  const returnedPet = returnInfoPetSchema.validate(updatedPet, {
    stripUnknown: true,
  });

  return returnedPet;
};

export default updatedPetService;
