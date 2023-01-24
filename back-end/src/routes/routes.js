const express = require('express');
const pets = require('./pets.routes');
const clientes = require('./clientes.routes');
const usuarios = require('./usuarios.routes');

const routes = express.Router();
routes.use('/pets', pets);
routes.use('/clientes', clientes);
routes.use('/usuarios', usuarios);

module.exports = routes;
