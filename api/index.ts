

import express from "express"
import { AppDataSource } from './src/data-source';
import routes from './src/routes'
const path = require('path');


AppDataSource.initialize().then(() => {
    const app = express()


    app.use(express.json())

    // Fazer com que o Node sirva os arquivos do app em React criado
    app.use(express.static(path.resolve(__dirname, './client/build')));

    app.use(routes)
    

    return app.listen(process.env.PORT)
})