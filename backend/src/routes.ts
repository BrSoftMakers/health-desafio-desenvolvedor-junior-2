import { Router } from 'express';

import { PetController } from './controllers/PetController';

import { petValidate } from './validations/petValidations';

const routes = Router();

// create pet
routes.post('/pets', petValidate, new PetController().createPet);

// get all pets
routes.get('/pets', new PetController().listAllPets);

// get a pet by id
routes.get('/pets/:petId', new PetController().getPetById);

// delete a pet
routes.delete('/pets/:petId', new PetController().deletePet);

// edit a pet
routes.put('/pets/:petId', petValidate, new PetController().updatePet);

export default routes;
