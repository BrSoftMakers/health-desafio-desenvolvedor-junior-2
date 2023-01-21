import { AppDataSource } from '../../data-source';
import { Pet } from '../../entities/pet.entity';
import { AppError } from '../../errors/App.error';

const deletePetService = async (petId: string): Promise<string> => {
  const petRepository = AppDataSource.getRepository(Pet);

  const petDeleted = await petRepository.findOneBy({
    id: petId,
  });

  if (!petDeleted) {
    throw new AppError('Pet not found!', 404);
  }

  await petRepository.softRemove(petDeleted);
  await petRepository.save({
    ...petDeleted,
    isActive: false,
  });

  return 'Pet deleted';
};

export default deletePetService;
