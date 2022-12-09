import express from "express";
import { getPets, addPets } from "../controllers/pets.js";

const router = express.Router();

router.get("/", getPets);
router.post("/", addPets);

export default router;
