import { Request, Response } from 'express';
import { Pet } from '../../app/models/pet';

export async function createPet(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, age, animalType, animalBreed, instructorName, instructorNumber, category } = req.body;

    const pet = await Pet.create({
      imagePath,
      name,
      age,
      animalType,
      animalBreed,
      instructorName,
      instructorNumber,
      category,
    });

    res.status(201).json(pet);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
