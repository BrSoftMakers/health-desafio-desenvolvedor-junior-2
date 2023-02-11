import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Pet } from "../entities/pet.entity";
import { iPetRequest, iPetUpdate } from "../interfaces/pets.interfaces";
import { createPetService } from "../services/createPet.service";
import { deletePetService } from "../services/deletePet.service";
import { listPetsService } from "../services/listPets.service";
import { updatePetService } from "../services/updatePet.service";

export const createPetController = async (req: Request, res: Response) => {
  const petData: iPetRequest = req.body;
  const newPet = await createPetService(petData);

  return res.status(201).json(newPet);
};

export const listPetsController = async (req: Request, res: Response) => {
  const allPets = await listPetsService();

  return res.json(allPets);
};

export const updatePetController = async (req: Request, res: Response) => {
  const petData: iPetUpdate = req.body;
  const petId: string = req.params.id;

  const updatedUser = await updatePetService(petId, petData);

  return res.json(updatedUser);
};

export const deletePetController = async (req: Request, res: Response) => {
  const petId: string = req.params.id;
  await deletePetService(petId);

  return res.status(204).json({});
};
