import Router from 'express';
import PetController from '../controllers/PetController';

const petRouter = Router();

petRouter.get('/', PetController.GetAll);
petRouter.get('/:id', PetController.GetById);
petRouter.post('/', PetController.AddPet);
petRouter.put('/edit/:id', PetController.EditPet);
petRouter.delete('/remove/:id', PetController.RemovePet);

export default petRouter;
