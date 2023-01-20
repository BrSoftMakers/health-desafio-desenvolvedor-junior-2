import { Request, Response } from 'express';
import { IPetRequest } from '../interfaces/pets/petsInterface';
import createPetService from '../services/pets/createPets.service';
import listAllPetService from '../services/pets/listAllPets.service';

const createPetsController = async (req: Request, res: Response) => {
  const data: IPetRequest = req.body;
  const id = req.owner.id;
  const newPet = await createPetService(data, id);
  return res.status(201).json(newPet);
};

const listPetsController = async (req: Request, res: Response) => {
  const petsList = await listAllPetService();
  return res.json(petsList);
};

export { createPetsController, listPetsController };
