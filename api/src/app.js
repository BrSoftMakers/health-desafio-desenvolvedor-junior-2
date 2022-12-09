const express = require('express');
require('express-async-errors');

const petsRouter = require('./routes/pet.router');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use('/pets', petsRouter);

app.use(errorHandler);

module.exports = app;
