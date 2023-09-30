const express = require('express');

require('express-async-errors');

require('./config/db.js');

const app = express();
const cors = require('cors');

const router = require('./routes');

app.get('/', (req, res) => {
    res.send({message: "Seja bem vindo a API de Classic Models"});
});

app.use(cors());
app.use(express.json());

app.use('/api', router);

app.use((err, req, res, next) => {
    console.log(err)
});

app.listen(3000, () =>{
    console.log('Servidor rodando');
});