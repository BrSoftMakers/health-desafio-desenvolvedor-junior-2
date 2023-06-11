const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const animalController = require('./controllers/AnimalController')

app.use(express.json()); 
app.use(cors()); 

// Rota para exibir a lista de animais
app.get('/api/animals', animalController.listAnimals);

// Rota para criar um novo animal
app.post('/api/animals', animalController.createAnimal);

// Rota para atualizar os dados de um animal
app.post('/api/animals/:id', animalController.updateAnimal);

// Rota para excluir um animal
app.delete('/api/animals/:id', animalController.deleteAnimal);

app.use(express.static('public'))

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'frontend/public/', 'index.html'));
// });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/public/', 'index.html'));
});

app.listen(8000, () => {
  console.log('Servidor está executando na porta 8000');
});



