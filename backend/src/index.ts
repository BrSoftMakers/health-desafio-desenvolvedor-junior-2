import express from 'express';

import cors from 'cors';

import { AppDataSource } from './data-source';
import routes from './routes';

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(cors({origin: '*'}));

  app.use(express.json());

  app.use(routes);

  return app.listen(process.env.PORT, () => {
    console.log('Server is running!');
  });
}).catch(() => {
  return console.log('Falha ao tentar conectar com o servidor.');
});
