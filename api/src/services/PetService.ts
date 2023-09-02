import PetModel from "../database/models/pet";
import { notFound } from "../helpers/httpResponses";
import { Pet } from "../types/DTO/pet";

class PetSevice {
  async createPet(pet: Pet) {
    console.log(pet);
    return await PetModel.create(pet);
  }

  async getAllPets() {
    return await PetModel.findAll();
  }

  async getPetById(id: number) {
    const pet = await PetModel.findOne({ where: { id } });

    if (!pet) throw notFound("Pet not found");

    return pet;
  }

  async updatePet(id: number, pet: Pet) {
    const petFound = await PetModel.findOne({ where: { id } });

    if (!petFound) throw notFound("Pet not found");

    return await petFound.update({ ...petFound, ...pet });
  }

  async deletePet(id: number) {
    const petFound = await PetModel.findOne({ where: { id } });

    if (!petFound) throw notFound("Pet not found");

    await petFound.destroy();

    return { message: "Pet deleted" };
  }
}

export default new PetSevice();
