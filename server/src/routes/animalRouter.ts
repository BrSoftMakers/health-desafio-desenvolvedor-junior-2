import { Router } from 'express';

import {
  addAnimal,
  listAnimals,
  updateInfo,
  removeAnimalRecord,
} from '../controllers/animalController';

import {
  createAnimalValidation,
  updateAnimalValidation,
} from '../middlewares/animalValidation';

const animalRouter = Router();

animalRouter.get('/animals', listAnimals);
animalRouter.post('/animals/add', createAnimalValidation, addAnimal);
animalRouter.put('/animals/:id/update', updateAnimalValidation, updateInfo);
animalRouter.delete('/animals/:id/remove', removeAnimalRecord);

export default animalRouter;
