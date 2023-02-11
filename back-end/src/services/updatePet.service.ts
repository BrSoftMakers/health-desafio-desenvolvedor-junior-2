import { AppDataSource } from "../data-source";
import { Pet } from "../entities/pet.entity";
import { AppError } from "../errors/appError";
import { iPetUpdate } from "../interfaces/pets.interfaces";

export const updatePetService = async (
  petId: string,
  petData: iPetUpdate
): Promise<Pet> => {
  const specie = petData.species;
  if (specie && specie != "Gato" && specie != "Cachorro") {
    throw new AppError("the atribute 'species' must be  'Gato' or 'Cachorro'");
  }

  const petRepository = AppDataSource.getRepository(Pet);
  const petToUpdate = await petRepository
    .findOneByOrFail({
      id: petId,
    })
    .catch(() => {
      throw new AppError("pet not found", 404);
    });

  const updatedpet = petRepository.create({
    ...petToUpdate,
    ...petData,
  });

  await petRepository.save(updatedpet);

  return updatedpet;
};
