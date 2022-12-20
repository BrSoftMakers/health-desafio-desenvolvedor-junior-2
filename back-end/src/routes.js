const express = require('express');
const router = express();

const { authentication } = require('./middlewares/authentication');
const { login } = require('./controllers/login');
const { createUsers, updateUser } = require('./controllers/users');
const { createClients, updateClient, readClient, readAllClients, deleteClient } = require('./controllers/clients');
const { createPets, readPet, updatePet, readAllPets, deletePet } = require('./controllers/pets');
const dashboard = require('./controllers/dashboard');



router.post('/usuarios', createUsers);
router.post('/login', login);


router.use(authentication)


router.put('/usuarios/:id', updateUser);


router.get('/dashboard', dashboard);


router.post('/clientes', createClients);
router.put('/clientes/:id', updateClient);
router.get('/clientes/:id', readClient);
router.get('/clientes', readAllClients);
router.delete('/clientes/:id', deleteClient);


router.post('/pets', createPets);
router.get('/pets/:id', readPet);
router.put('/pets/:id', updatePet);
router.get('/pets', readAllPets);
router.delete('/pets/:id', deletePet);


module.exports = router;
