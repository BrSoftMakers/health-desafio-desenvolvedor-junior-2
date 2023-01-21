import { NextFunction, Request, Response } from 'express';
import { AppDataSource } from '../../data-source';
import { Pet } from '../../entities/pet.entity';
import { AppError } from '../../errors/App.error';

const ensurePetExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const petRepository = AppDataSource.getRepository(Pet);

  const petId = await petRepository.findOneBy({
    id: req.params.id,
  });

  if (!petId) {
    throw new AppError('Pet does not exist', 400);
  }

  next();
};

export { ensurePetExistsMiddleware };
