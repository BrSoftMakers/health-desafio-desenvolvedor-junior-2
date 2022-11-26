import express from 'express';

import { AppDataSource } from './data-source';

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.get('/', (req, res) => {
    return res.json('tudo ok');
  });

  return app.listen(process.env.PORT, () => {
    console.log('Server is running!');
  });
}).catch(() => {
  return console.log('Falha ao tentar conectar com o servidor.');
});
