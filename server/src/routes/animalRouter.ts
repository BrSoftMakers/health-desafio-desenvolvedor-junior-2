import { Router } from 'express';
import { listAnimals } from '../controllers/animalController';

const animalRouter = Router();

animalRouter.get('/animals', listAnimals);

export default animalRouter;
