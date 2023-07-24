import express from "express";

import PetController from "../controllers/pet.controller";

const createPetRouter = express.Router();

const petController = new PetController();

createPetRouter.post("/pets", (req, res) => petController.createPet(req, res));

export default createPetRouter;
