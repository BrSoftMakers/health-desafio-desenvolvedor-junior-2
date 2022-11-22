const express = require('express');
const md = require('../middlewares');
const router = express.Router();

const Controller = require('../controllers/pet')

router.get('/pets', Controller.getAllPets);
router.get('/pets/:id', Controller.getPetById);
router.post('/pets', md.formatNames, Controller.createPet);
router.patch('/pets/:id', md.formatNames ,Controller.updatePet);
router.delete('/pets/:id', Controller.deletePet);

router.get('/dogs', Controller.getAllDogs);
router.get('/cats', Controller.getAllCats);

module.exports = router