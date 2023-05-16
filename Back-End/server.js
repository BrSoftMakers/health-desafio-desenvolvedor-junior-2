const express = require('express');
const app = express();
const { deletePet, registerPet, editPet, getPetById } = require('./controllers/controllers');
const errorHandler = require('./middlewares/errorHandler')
const Pets = require('./models/Pets');
const cors = require('cors')

app.use(cors())
app.use(express.json());

/*Consulta conexão com banco de dados
sequelize.sync().then(() => {
  console.log('Conectado com o banco de dados.');
}).catch((err) => {
  console.log("ERRO", err);
});
*/

app.get('/', function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  Pets.findAll({ order: [['id', 'DESC']] })
    .then(pets => res.json({ pets: pets }))
    .catch(next);
});

//Consultar pet por id
app.get('/pets/:id', getPetById)

//Registrar
app.post("/register", registerPet);

//Editar
app.put("/editar/:id", editPet);

//Remover
app.delete("/pets/:id", deletePet);

// Rota para tratar erros não capturados
app.use(errorHandler);

app.listen(8081, async (req, res) => {
  console.log("Servidor conectado com sucesso!");
});

