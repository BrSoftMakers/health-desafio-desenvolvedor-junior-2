import { Router } from 'express';
import {
  createPetsController,
  deletePetsController,
  listPetByIdController,
  listPetsController,
  updatedPetsController,
} from '../controllers/pet.controller';
import { ensurePetExistsMiddleware } from '../middlewares/pets/ensurePetExistsMiddleware';

const petsRoutes = Router();

petsRoutes.post('', createPetsController);

petsRoutes.get('', listPetsController);

petsRoutes.get('/:id', ensurePetExistsMiddleware, listPetByIdController);

petsRoutes.patch('/:id', ensurePetExistsMiddleware, updatedPetsController);

petsRoutes.delete('/:id', ensurePetExistsMiddleware, deletePetsController);

export default petsRoutes;
