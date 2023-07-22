import express from "express";

import PetController from "../controllers/pet.controller";

const getPetRouter = express.Router();

const petController = new PetController();

getPetRouter.get("/pets/:id", petController.getPet);

export default getPetRouter;
