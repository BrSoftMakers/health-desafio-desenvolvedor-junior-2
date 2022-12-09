import express from "express";
import { getPets, addPets, updatePets, deletePet } from "../controllers/pets.js";

const router = express.Router();

router.get("/pets", getPets);
router.post("/pets", addPets);
router.put("/pets/:id", updatePets);
router.delete("/pets/:id", deletePet);

export default router;
