import { AppDataSource } from '../../data-source';
import { Pet } from '../../entities/pet.entity';

const listAllPetService = async (): Promise<Pet[]> => {
  const petRepository = AppDataSource.getRepository(Pet);

  const listPets = await petRepository.find();

  return listPets;
};

export default listAllPetService;
