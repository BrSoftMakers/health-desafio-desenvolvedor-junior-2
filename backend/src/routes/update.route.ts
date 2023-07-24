import express from "express";

import PetController from "../controllers/pet.controller";

const updatePetRouter = express.Router();

const petController = new PetController();

updatePetRouter.put("/pets/:id", petController.updatePet);

export default updatePetRouter;
