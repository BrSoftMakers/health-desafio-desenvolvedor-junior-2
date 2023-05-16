import Router from 'express';
import petRouter from './petRoutes.routes';

const router = Router();

router.use('/api/pets', petRouter);

export default router;
