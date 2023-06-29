import { AppDataSource } from "../data-source";
import { Pet } from "../entities/pet.entity";
import { AppError } from "../errors/AppError";

export const listPetsService = async (): Promise<Pet[]> => {
  const petRepository = AppDataSource.getRepository(Pet);

  try {
    const allPets = await petRepository.find();
    return allPets;
  } catch (error) {
    throw new AppError("Unable to list pets", 500);
  }
};
