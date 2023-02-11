import { AppDataSource } from "../data-source";
import { Pet } from "../entities/pet.entity";
import { AppError } from "../errors/appError";
import { iPetRequest } from "../interfaces/pets.interfaces";

export const createPetService = async (petData: iPetRequest): Promise<Pet> => {
  const petRepository = AppDataSource.getRepository(Pet);

  if (petData.species != "Cachorro" && petData.species != "Gato") {
    throw new AppError("the atribute 'species' must be 'Gato' or 'Cachorro'");
  }

  const pet = petRepository.create(petData);

  await petRepository.save(pet);

  return pet;
};