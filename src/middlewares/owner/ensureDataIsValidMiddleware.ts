import { AnySchema } from 'yup';
import { NextFunction, Request, Response } from 'express';
import { AppDataSource } from '../../data-source';
import { Owner } from '../../entities/petOwner.entity';
import { AppError } from '../../errors/App.error';

const ensureDataIsValidMiddleware =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const ensureBodyUser = await schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    const userRepository = AppDataSource.getRepository(Owner);
    const ensureUserExist = await userRepository.findOneBy({
      phone_number: ensureBodyUser.phone_number,
    });

    if (ensureUserExist) {
      throw new AppError('Existing user', 409);
    }

    next();
  };

export { ensureDataIsValidMiddleware };
