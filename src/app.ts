import express from 'express';
import 'express-async-errors';
import 'reflect-metadata';

const app = express();

app.use(express.json());

export default app;
