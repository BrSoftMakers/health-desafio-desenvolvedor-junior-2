import { Router } from "express";

import { validateBody } from "../middlewares/schemaMiddleware";
import { postSchema } from "../schemas/petSchema";

import { controller } from "../controllers/petController";

const router = Router();

router.post("/pets", validateBody(postSchema), controller.post);

export default router;
