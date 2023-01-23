cd back-end/

npm init -y

npm i express sequelize pg dotenv

npm i -D nodemon sequelize-cli

touch .sequelizerc
echo -e "const path = require('path');

module.exports = {
    'config': path.resolve('src', 'config', 'config.js'),
    'models-path': path.resolve('src', 'models'),
    'seeders-path': path.resolve('src', 'seeders'),
    'migrations-path': path.resolve('src', 'migrations'),
};
" >> .sequelizerc

mkdir src

(cd src && npx sequelize-cli init)

mkdir src/controllers src/services
touch src/app.js 
echo -e "const express = require('express');

const app = express();

app.use(express.json());

module.exports = app;
" >> src/app.js 
touch src/server.js 

echo -e "const app = require('./app');
const { PORT = 3001 } = process.env;

app.listen(PORT, () => \`Ouvindo na porta ${PORT}\`);
" >> src/server.js 

touch src/services/user.service.js src/controllers/user.controller.js src/services/userBook.service.js src/controllers/userBook.controller.js