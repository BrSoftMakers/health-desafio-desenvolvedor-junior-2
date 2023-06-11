const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();

app.use(bodyParser.json(),cors());
app.use(express.json());

const animaisControler = require("./controllers/animal.controller");

app.get('/animais', animaisControler.findAll);
app.post('/animal', animaisControler.create);
app.post('/animais/:id',animaisControler.update)
app.delete('/animais/:id',animaisControler.delete );

app.listen(3000, () => {
    console.log("Aplicação na porta: http://localhost:3000");
});