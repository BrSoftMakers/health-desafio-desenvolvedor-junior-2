import express, { json } from 'express';
import cors from 'cors';
import animalRouter from './routes/animalRouter';

const app = express();

app.use(json());
app.use(cors());
app.use(animalRouter);

export default app;
