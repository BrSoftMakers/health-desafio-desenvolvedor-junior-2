import express from "express";

import PetController from "../controllers/pet.controller";

const getPetsRouter = express.Router();

const petController = new PetController();

getPetsRouter.get("/pets", petController.listPets);

export default getPetsRouter;
