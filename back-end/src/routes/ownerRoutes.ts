import { Router } from "express";

import { validateBody } from "../middlewares/schemaMiddleware";

import { postSchema } from "../schemas/onwerSchema";

import { controller } from "../controllers/ownerController";

const router = Router();

router.post("/owners", validateBody(postSchema), controller.post);

export default router;
