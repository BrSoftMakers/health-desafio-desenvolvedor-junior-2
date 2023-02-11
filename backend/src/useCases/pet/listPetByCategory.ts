import { Request, Response } from 'express';
import { Pet } from '../../app/models/pet';

export async function listPetByCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;

    const pet = await Pet.find().where('category').equals(categoryId);

    res.json(pet);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
