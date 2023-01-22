import { Router } from 'express';
import { createOwnerPetController } from '../controllers/ownerPet.controller';
import { ensureDataIsValidMiddleware } from '../middlewares/owner/ensureDataIsValidMiddleware';
import { ownerSchema } from '../schemas/owner/ownerSchema';

const ownerRoutes = Router();

ownerRoutes.post(
  '',
  ensureDataIsValidMiddleware(ownerSchema),
  createOwnerPetController
);

export default ownerRoutes;
