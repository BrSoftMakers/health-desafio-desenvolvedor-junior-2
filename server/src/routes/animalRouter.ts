import { Router } from 'express';

import {
  addAnimal,
  listAnimals,
  updateInfo,
} from '../controllers/animalController';

import {
  createAnimalValidation,
  updateAnimalValidation,
} from '../middlewares/animalValidation';

const animalRouter = Router();

animalRouter.get('/animals', listAnimals);
animalRouter.post('/animals/add', createAnimalValidation, addAnimal);
animalRouter.put('/animals/:id/update', updateAnimalValidation, updateInfo);

export default animalRouter;
