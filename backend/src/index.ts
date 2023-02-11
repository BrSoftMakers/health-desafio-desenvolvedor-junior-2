import http from 'node:http';
import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';
import { cors } from './app/middlewares/cors';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose.connect('mongodb://localhost:27017')
  .then(() => {

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(cors);
    app.use(router);

    server.listen(3001, () => console.log('✨ Server started at http://localhost:3001'));
  })
  .catch(() => console.log('Server not found'));
