import { Request, Response } from 'express';
import animalsService from '../services/animalServices';

export async function listAnimals(req: Request, res: Response) {
  const animals = await animalsService.listAll();
  return res.status(200).send(animals);
}

export async function addAnimal(req: Request, res: Response) {
  await animalsService.insert(req.body);
  return res.status(201).send('Record added!');
}

export async function updateInfo(req: Request, res: Response) {
  const id = Number(req.params.id);
  await animalsService.update(req.body, id);
  return res.status(200).send('Record successfully updated!');
}

export async function removeAnimalRecord(req: Request, res: Response) {
  const id = Number(req.params.id);
  await animalsService.removeById(id);
  return res.status(200).send('Record removed!');
}
