import { Router } from "express";
import { deletePets } from "../controllers/pets";

const router = Router();

router.delete("/api/deletePet", deletePets);

export default router;