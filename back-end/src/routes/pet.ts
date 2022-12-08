import { Request, Response, Router } from "express";
import PetController from "../controllers/pet";
import PetValidator from "../validators/pet";

const routes = Router();

routes.get('/test', (req: Request, res: Response) => {
  res.json({ ok: true });
});

routes.get('/pets/:id', PetController.read);
routes.post('/pets', PetValidator.create, PetController.create);

export default routes;
