const express = require('express');

const petsRouter = require('./routes/pet.router');

const app = express();

app.use('/pets', petsRouter);

module.exports = app;
