const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const petsRoutes = require('./rotas/routes');
app.use('/api', petsRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});