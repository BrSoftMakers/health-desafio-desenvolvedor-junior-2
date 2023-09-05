import { errorResponses } from "../helpers/errorResponses";
import { success, badRequest } from "../helpers/httpResponses";
import PetService from "../services/PetService";
import { Request } from "express";
import { Pet } from "../types/DTO/pet";

class PetController {
  async create({ body }: Request) {
    try {
      if (body.petType !== "gato" && body.petType !== "cachorro")
        return badRequest("Tipo do pet deve ser gato ou cachorro");

      return success(await PetService.createPet(body));
    } catch (error) {
      return errorResponses(error);
    }
  }

  async getAll() {
    try {
      return success(await PetService.getAllPets());
    } catch (error) {
      return errorResponses(error);
    }
  }

  async getById({ params }: Request) {
    try {
      return success(await PetService.getPetById(Number(params.id)));
    } catch (error) {
      return errorResponses(error);
    }
  }

  async update({ params, body }: Request) {
    try {
      return success(await PetService.updatePet(Number(params.id), body));
    } catch (error) {
      return errorResponses(error);
    }
  }

  async delete({ params }: Request) {
    try {
      return success(await PetService.deletePet(Number(params.id)));
    } catch (error) {
      return errorResponses(error);
    }
  }
}

export default new PetController();
