const express = require('express');
const pets = require('./pets.routes');

const routes = express.Router();
routes.use('/pets', pets);

module.exports = routes;
