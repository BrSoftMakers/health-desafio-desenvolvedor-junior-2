import { AppDataSource } from '../../data-source';
import { Pet } from '../../entities/pet.entity';
import { AppError } from '../../errors/App.error';
import { IPetResponse } from '../../interfaces/pets/petsInterface';
import { returnInfoPetSchema } from '../../schemas/pets/petSchema';

const listPetByIdService = async (petId: string): Promise<IPetResponse> => {
  const petRepository = AppDataSource.getRepository(Pet);

  const findPetId = await petRepository.findOne({
    where: {
      id: petId,
    },
  });

  if (!findPetId) {
    throw new AppError('Pet not found', 404);
  }

  const returnedPet = returnInfoPetSchema.validate(findPetId, {
    stripUnknown: true,
  });

  return returnedPet;
};

export default listPetByIdService;
