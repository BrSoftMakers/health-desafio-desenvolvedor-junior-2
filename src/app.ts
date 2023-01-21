import express from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import handleError from './errors/handleError';
import ownerRoutes from './routers/ownerRoutes';
import petsRoutes from './routers/petsRoutes';

const app = express();

app.use(express.json());

app.use('/register', ownerRoutes);
app.use('/pets', petsRoutes);

app.use(handleError);

export default app;
