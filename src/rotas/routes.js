const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');

router.post('/adicionar-pet', petController.adicionarPet);
router.get('/listar-pets', petController.listarPets);
router.get('/visualizar-pet/:id', petController.visualizarPetPorId);
router.put('/editar-pet/:id', petController.editarPetPorId);
router.delete('/excluir-pet/:id', petController.excluirPetPorId);

module.exports = router;