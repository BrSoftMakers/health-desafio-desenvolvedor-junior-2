import { Request, Response, NextFunction } from 'express';
import bodySchema from '../schemas/createAnimal';

export default function createAnimalValidation(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    bodySchema.parse(req.body);
    next();
  } catch (error) {
    res.status(422).send(error.issues);
  }
}
