import express from "express";
import DonoController from "../controllers/DonoController";
import PetController from "../controllers/PetController";

export const router = express.Router();

//donos
router.get("/owner", DonoController.listAll);

router.post("/add/owner/", DonoController.createOne);

router.delete("/remove/owner/", DonoController.deleteOne);

router.put("/update/owner/", DonoController.updateOne);

//pets
router.get("/pets", PetController.listAll);

router.post("/add/pet/", PetController.createOne);

router.delete("/remove/pet/", PetController.deleteOne);

router.put("/update/pet/", PetController.updateOne);
