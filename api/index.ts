

import express from "express"
import { AppDataSource } from './src/data-source';
import routes from './src/routes'
const path = require('path');
const cors = require('cors')

const PORT = process.env.PORT || 3001;
const INDEX = '../../client/build/index.html';

AppDataSource.initialize().then(() => {
    const app = express()
    app.use(cors())

    app.use(express.json())

    app.use(routes)

    if(process.env.NODE_ENV) {
        //static folder add
        app.use(express.static('client/build'));
        
        app.get("*", function (req, res) {
            res.sendFile(path.resolve(__dirname , "client/build", "index.html"));
        });
    }

    return app.listen(PORT)
})