import { Router } from "express";
import {
  createPetController,
  deletePetController,
  updatePetController,
  listPetsController,
} from "../controllers/pets.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureInputIsUuidMiddleware } from "../middlewares/ensureInputIsUuid.middleware";
import {
  petSerializer,
  petUpdateSerializer,
} from "../serializers/pet.serializers";

export const petRoutes = Router();

petRoutes.post(
  "",
  ensureDataIsValidMiddleware(petSerializer),
  createPetController
);
petRoutes.get("", listPetsController);
petRoutes.patch(
  "/:id",
  ensureInputIsUuidMiddleware,
  ensureDataIsValidMiddleware(petUpdateSerializer),
  updatePetController
);
petRoutes.delete("/:id", ensureInputIsUuidMiddleware, deletePetController);
