const express = require('express');

const controllers = require('../controllers/petsController');
const validatorNewPetJoi = require('../middlewares/validatorNewPetJoi');

const router = express.Router();

router.get('/read-all', controllers.readAll);
router.get('/read/:id', controllers.read); 
router.post('/create', validatorNewPetJoi, controllers.create);
router.put('/update/:id', validatorNewPetJoi, controllers.update); 
router.delete('/delete/:id', controllers.del); 

module.exports = router;
