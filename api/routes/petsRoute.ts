import { Router } from "express";
import { searchAllPets } from "../controllers/pets";

const router = Router();

router.get("/api/pets", searchAllPets);

export default router;