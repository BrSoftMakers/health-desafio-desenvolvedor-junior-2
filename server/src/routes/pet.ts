import { DeletePetController } from "../http/controllers/delete-pet-controller";
import { FetchPetsController } from "../http/controllers/fetch-pets-controller";
import { FindPetByIdController } from "../http/controllers/find-pet-by-id-controller";
import { validateFields } from "../http/middlewares/fieldsValidation";
import { RegisterPetController } from "../http/controllers/register-pet-controller";
import { UpdatePetController } from "../http/controllers/update-pet-controller";
import express from "express";

export const routerPet = express.Router();

const registerPetController = new RegisterPetController()
const fetchPetsController = new FetchPetsController()
const updatePetController = new UpdatePetController()
const deletePetController = new DeletePetController()
const findPetByIdController = new FindPetByIdController()

routerPet.post('/', validateFields, registerPetController.register)
routerPet.get('/', fetchPetsController.findMany)
routerPet.patch('/:id', updatePetController.update)
routerPet.delete('/:id', deletePetController.delete)
routerPet.get('/:id', findPetByIdController.findById)
