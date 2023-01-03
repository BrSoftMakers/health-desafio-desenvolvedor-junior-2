import { Router } from "express";
import { getPetWithId } from "../controllers/pets";

const router = Router();

router.get("/api/getPetWithId", getPetWithId);

export default router;