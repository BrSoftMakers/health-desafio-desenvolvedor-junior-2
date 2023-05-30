import { Router } from 'express';
import { addAnimal, listAnimals } from '../controllers/animalController';
import createAnimalValidation from '../middlewares/createAnimalValidation';

const animalRouter = Router();

animalRouter.get('/animals', listAnimals);
animalRouter.post('/animals/add', createAnimalValidation, addAnimal);

export default animalRouter;
