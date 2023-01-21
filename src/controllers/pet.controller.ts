import { Request, Response } from 'express';
import { IUpdatePet } from '../interfaces/pets/petsInterface';
import createPetService from '../services/pets/createPets.service';
import deletePetService from '../services/pets/deletePets.service';
import listAllPetService from '../services/pets/listAllPets.service';
import listPetByIdService from '../services/pets/listPetById.service';
import updatedPetService from '../services/pets/updatePets.service';

const createPetsController = async (req: Request, res: Response) => {
  const { name, age, type, breed, owner_id } = req.body;
  const newPet = await createPetService({
    name,
    age,
    type,
    breed,
    owner_id,
  });
  return res.status(201).json(newPet);
};

const listPetsController = async (req: Request, res: Response) => {
  const petsList = await listAllPetService();
  return res.json(petsList);
};

const listPetByIdController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const petData = await listPetByIdService(id);
  return res.status(200).json(petData);
};

const updatedPetsController = async (req: Request, res: Response) => {
  const data: IUpdatePet = req.body;
  const id = req.params.id;
  const updatedPet = await updatedPetService(data, id);
  return res.status(200).json(updatedPet);
};

const deletePetsController = async (req: Request, res: Response) => {
  const id = req.params.id;
  await deletePetService(id);
  return res.status(204).send();
};

export {
  createPetsController,
  listPetsController,
  listPetByIdController,
  updatedPetsController,
  deletePetsController,
};
