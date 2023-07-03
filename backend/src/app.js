const express = require('express');
const cors = require('cors');
const Router = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Servidor funcionando a todo vapor!!' });
});

app.use('/owners', Router.OwnerRouter);
app.use('/pets', Router.PetRouter);

module.exports = app;
