import PetModel from "../database/models/pet";
import { NotFoundError } from "../errors/NotFoundError";
import { Pet } from "../types/DTO/pet";

class PetSevice {
  async createPet(pet: Pet) {
    return await PetModel.create(pet);
  }

  async getAllPets() {
    return await PetModel.findAll();
  }

  async getPetById(id: number) {
    const pet = await PetModel.findOne({ where: { id } });

    if (!pet) throw new NotFoundError("Animal não encontrado");

    return pet;
  }

  async updatePet(id: number, pet: Pet) {
    const petFound = await PetModel.findOne({ where: { id } });

    if (!petFound) throw new NotFoundError("Animal não encontrado");

    return await petFound.update({ ...petFound, ...pet });
  }

  async deletePet(id: number) {
    const petFound = await PetModel.findOne({ where: { id } });

    if (!petFound) throw new NotFoundError("Animal não encontrado");

    await petFound.destroy();

    return { message: "Pet deletado" };
  }
}

export default new PetSevice();
