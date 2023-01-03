import { Router } from "express";
import { searchAllPets } from "../controllers/pets";

const router = Router();

router.post("/api/pets", searchAllPets);

export default router;