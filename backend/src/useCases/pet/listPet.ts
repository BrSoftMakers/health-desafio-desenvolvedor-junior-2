import { Request, Response } from 'express';
import { Pet } from '../../app/models/pet';

export async function listPet(req: Request, res: Response) {
  try {
    const category = await Pet.find();

    res.json(category);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
