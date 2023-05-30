import { Request, Response } from 'express';
import animalsService from '../services/animalServices';

export async function listAnimals(req: Request, res: Response) {
  const animals = await animalsService.listAll();
  return res.status(200).send(animals);
}

export async function addAnimal(req: Request, res: Response) {
  const animals = await animalsService.insert(req.body);
  return res.status(200).send(animals);
}
