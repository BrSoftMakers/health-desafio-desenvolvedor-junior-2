import { Router } from 'express';
import {
  createPetsController,
  deletePetsController,
  listPetByIdController,
  listPetsController,
  updatedPetsController,
} from '../controllers/pet.controller';

const petsRoutes = Router();

petsRoutes.post('', createPetsController);

petsRoutes.get('', listPetsController);

petsRoutes.get('/:id', listPetByIdController);

petsRoutes.patch('/:id', updatedPetsController);

petsRoutes.delete('/:id', deletePetsController);

export default petsRoutes;
