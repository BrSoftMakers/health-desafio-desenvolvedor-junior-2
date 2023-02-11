import { Request, Response } from 'express';
import { Pet } from '../../app/models/pet';

export async function listPetById(req: Request, res: Response) {
  try {
    const { petId } = req.params;

    const pet = await Pet.findById(petId);

    res.json(pet);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
