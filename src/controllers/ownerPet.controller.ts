import { Request, Response } from 'express';
import { IOwnerRequest } from '../interfaces/owner/ownerInterface';
import createOwnerPetService from '../services/owner/createOwnerPet.service';

const createOwnerPetController = async (req: Request, res: Response) => {
  const ownerPet: IOwnerRequest = req.body;
  const id = req.params.id;
  const createOwnerPet = await createOwnerPetService(ownerPet, id);
  return res.status(201).json(createOwnerPet);
};

export { createOwnerPetController };
