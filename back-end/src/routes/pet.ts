import { Router } from "express";
import PetController from "../controllers/pet";
import PetValidator from "../validators/pet";

const routes = Router();

routes.get('/pets/:id', PetController.read);
routes.get('/pets', PetController.list);
routes.post('/pets', PetValidator.create, PetController.create);
routes.delete('/pets/:id', PetController.destroy);

export default routes;
