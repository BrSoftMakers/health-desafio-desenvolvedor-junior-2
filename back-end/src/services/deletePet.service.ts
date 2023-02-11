import { AppDataSource } from "../data-source";
import { Pet } from "../entities/pet.entity";
import { AppError } from "../errors/AppError";

export const deletePetService = async (petId: string): Promise<void> => {
  const petRepository = AppDataSource.getRepository(Pet);

  const petToDelete = await petRepository
    .findOneByOrFail({
      id: petId,
    })
    .catch(() => {
      throw new AppError("Pet not found", 404);
    });

  await petRepository.remove(petToDelete);
};
