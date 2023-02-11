import { Request, Response } from 'express';
import { Pet } from '../../app/models/pet';

export async function changePetInfo(req: Request, res: Response) {
  try {
    const { petId } = req.params;

    const { name, age, animalType, animalBreed, instructorName, instructorNumber, category } = req.body;

    await Pet.findByIdAndUpdate(petId, { name, age, animalType, animalBreed, instructorName, instructorNumber, category });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
