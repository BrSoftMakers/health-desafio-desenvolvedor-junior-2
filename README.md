# Desafio Health
Projeto criado para a seleção do cargo Desenvolvedor Fullstack, da SoftMakers. O projeto utiliza React.js para implementação do frontend, já para o backend, faz uso de Node.js e express. O banco de dados utilizado foi o PostgreSQL, o qual foi integrado ao backend utilizando a ORM Sequelize.

### Pré-requisitos
* Node.js 16.14.2: https://nodejs.org/en
* Banco criado no postgreSQL: https://www.postgresql.org/download/

### Executando a aplicação
##### Backend
1. Entre na pasta api utilizando o comando  $ cd api
2. Na raiz da API, crie um arquivo .env segundo o exemplo contido no arquivo .env.example.
3. Instale as dependências necessárias utilizando:
$ npm install 
ou o equivalente para usuários do Yarn:
$ yarn install 
4. Configure o banco de dados através do sequelize:
$ npx sequelize-cli db:create 
e:
$ npx sequelize-cli db:migrate 
5. Rode a API através do comando:
$ npm run dev
ou:
$ yarn dev

##### Frontend

1. Entre na pasta petshop, localizada na pasta client
$ cd client/petshop
2. Crie um arquivo .env segundo o exemplo contido no arquivo .env.example
3. Instale as dependências necessárias utilizando o comando:
$ $ npm install
ou o equivalente para usuários do Yarn:
$ yarn install
5. Execute o frontend através do comando:
$ npm start
ou:
$ yarn start