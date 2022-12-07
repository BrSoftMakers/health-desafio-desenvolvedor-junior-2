import { Request, Response, Router } from "express";
import PetController from "../controllers/pet";

const routes = Router();

routes.get('/test', (req: Request, res: Response) => {
  res.json({ ok: true });
});

routes.post('/pets', PetController.create);

export default routes;
