import { Router } from "express";
import { editPet } from "../controllers/pets";

const router = Router();

router.put("/api/editPet", editPet);

export default router;