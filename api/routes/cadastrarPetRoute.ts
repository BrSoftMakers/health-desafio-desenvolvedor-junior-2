import { Router } from "express";
import { createRegisterPets } from "../controllers/pets";

const router = Router();

router.post("/api/cadastrarPet", createRegisterPets);

export default router;