const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');

const petsRouter = require('./routes/pet.router');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use('/pets', petsRouter);

app.use(errorHandler);

module.exports = app;
