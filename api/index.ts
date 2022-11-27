

import express from "express"
import { AppDataSource } from './src/data-source';
import routes from './src/routes'
const path = require('path');
const cors = require('cors')

const PORT = process.env.PORT || 3001;
const INDEX = '../build/index.html';

AppDataSource.initialize().then(() => {
    const app = express()
    app.use(cors)

    app.use(express.json())

    // Fazer com que o Node sirva os arquivos do app em React criado
    app.use((req, res) => res.sendFile(INDEX, { root: __dirname }));

    app.use(routes)
    

    return app.listen(PORT)
})