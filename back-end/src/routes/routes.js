const express = require('express');
const pets = require('./pets.routes');
const clientes = require('./clientes.routes');

const routes = express.Router();
routes.use('/pets', pets);
routes.use('/clientes', clientes);

module.exports = routes;
