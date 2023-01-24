import { Router } from "express";

import { validateBody } from "../middlewares/schemaMiddleware";
import { postSchema, patchSchema } from "../schemas/petSchema";

import { controller } from "../controllers/petController";

const router = Router();

router.post("/pets", validateBody(postSchema), controller.post);

router.get("/pets", controller.getAll);

router.patch("/pets/:petId", validateBody(patchSchema), controller.patch);

export default router;
