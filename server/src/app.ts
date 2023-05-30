import express, { json } from 'express';
import 'express-async-errors';
import cors from 'cors';
import animalRouter from './routes/animalRouter';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(json());
app.use(cors());
app.use(animalRouter);
app.use(errorHandler);

export default app;
