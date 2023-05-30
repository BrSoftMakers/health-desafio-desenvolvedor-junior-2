import { Request, Response, NextFunction } from 'express';
import animalSchemas from '../schemas/createAnimal';

export function createAnimalValidation(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    animalSchemas.createSchema.parse(req.body);
    next();
  } catch (error) {
    res.status(422).send(error.issues);
  }
}

export function updateAnimalValidation(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    animalSchemas.updateSchema.parse(req.body);
    next();
  } catch (error) {
    res.status(422).send(error.issues);
  }
}
