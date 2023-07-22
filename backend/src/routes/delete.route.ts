import express from "express";

import PetController from "../controllers/pet.controller";

const deletePetRouter = express.Router();

const petController = new PetController();

deletePetRouter.delete("/pets/:id", petController.deletePet);

export default deletePetRouter;
