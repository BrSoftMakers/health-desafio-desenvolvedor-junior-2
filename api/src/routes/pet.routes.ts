import express from "express";
import PetController from "../controllers/PetController";

const router = express.Router();

router.post("/", async (req, _res, next) =>
  next(await PetController.create(req))
);
router.get("/", async (_req, _res, next) => next(await PetController.getAll()));
router.get("/:id", async (req, _res, next) =>
  next(await PetController.getById(req))
);
router.put("/:id", async (req, _res, next) =>
  next(await PetController.update(req))
);
router.delete("/:id", async (req, _res, next) =>
  next(await PetController.delete(req))
);

export default router;
