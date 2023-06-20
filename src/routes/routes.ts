import { Express, Router } from "express";
import animalsController from "../controllers/animalsController";

const router = Router();

// List all animals
router.get('/', animalsController.getAllAnimals)

// Animal by id
router.get('/animal/:id', animalsController.getAnimalById)

// New Animal
router.post('/animal', animalsController.newAnimal);

// Update Animal
router.patch('/animal/:id', animalsController.updateAnimal);

// Delete Animal
router.delete('/animal/:id', animalsController.deleteAnimal);

export default router