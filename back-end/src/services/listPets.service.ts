import { AppDataSource } from "../data-source";
import { Pet } from "../entities/pet.entity";

export const listPetsService = async (): Promise<Pet[]> => {
  const petRepository = AppDataSource.getRepository(Pet);

  const allPets = await petRepository.find();

  return allPets;
};
