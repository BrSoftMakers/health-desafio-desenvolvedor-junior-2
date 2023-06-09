const express = require('express')
const app = express()
const animalController = require('./controllers/AnimalController')

app.use(express.urlencoded({ extended: false }));

// Rota para exibir a lista de animais
app.get('/api/animals', animalController.listAnimals);

// Rota para exibir o formulário de criação de animal
app.get('/api/animals/create', animalController.showCreateForm);

// Rota para criar um novo animal
app.post('/api/animals', animalController.createAnimal);

// Rota para exibir os detalhes de um animal
app.get('/api/animals/:id', animalController.listAnimalById);

// Rota para exibir o formulário de edição de animal
app.get('/api/animals/:id/edit', animalController.showUpdateForm);

// Rota para atualizar os dados de um animal
app.post('/api/animals/:id/update', animalController.updateAnimal);

// Rota para excluir um animal
app.post('/api/animals/:id/delete', animalController.deleteAnimal);

app.listen(8000, () => {
  console.log('Servidor está executando na porta 8000');
});


