import express from 'express';
import 'reflect-metadata';
import router from './routes';
const app = express();

app.use(express.static('dist'));
app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000!');
});
