 ![SoftMakers](https://www.softmakers.com.br/assets/img/logotipo14xxhdpi.png)

# Desafio - Desenvolvedor Fullstack Júnior 2 - Health
Seja bem-vindo! Este desafio foi projetado para avaliar a sua capacidade técnica como candidato à vaga de Desenvolvedor Fullstack Júnior 2 na Health Team.

## Instruções
- Faça um fork deste repositório;
- O conjunto mínimo de tecnologias a serem utilizadas são: HTML, CSS, JavaScript e React.js no front-end e Node.js no back-end;
- Crie um passo a passo de como rodar a sua aplicação;
- Após finalizar, submeta um pull request com um comentário informando o seu e-mail de contato e aguarde nossa avaliação.

## Proposta
Você deverá desenvolver um projeto no padrão MVC utilizando Node.js para o back-end e React.js para o front-end com a finalidade de que seja possível listar, visualizar, criar, editar, excluir animais de estimação de uma petshop.
> **Observações:**
> - Você deve utilizar o banco de dados relacional PostgreSQL para esse projeto;
> - Cada animal de estimação precisa ter um identificador único, nome, idade, se é gato ou cachorro e sua respectiva raça; Além do nome e telefone para contato de seu dono.

## Diferenciais
Será considerado como diferenciais a utilização ou o conhecimento nas seguintes tecnologias:
- Express JS
- Sequelize
- Redis
- Firebase Realtime Database
- Firebase Firestore
- Serviços de arquitetura em nuvem do Google Cloud Platform

<div align="center">

  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Prisma-316192?style=for-the-badge&logo=prisma&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Jest-316192?style=for-the-badge&logo=jest&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/React-316192?style=for-the-badge&logo=react&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" height="30px"/>
  
</div>

## Features

-   Animal CRUD.
-   Filter by animal type.

</br>

### Add new animal

```
http://localhost:5000
POST /animals/add
```

#### Request:

| Body          | Type     | Description                |
| :------------ | :------- | :------------------------- |
| `ownerName`   | `string` | **Required**. owner name   |
| `fone`        | `string` | **Required**. owner phone  |
| `animalName`  | `string` | **Required**. animal name  |
| `animalAge`   | `number` | **Required**. animal age   |
| `race`        | `string` | **Required**. animal race  |
| `type`        | `string` | **Required**. animal type  |

#### Response:

```
status: 201
message: Record added!
```

#

### List all registered animals

```
http://localhost:5000
GET /animals
```

#### Response:

```json
[
  {
    "id": 4,
    "name": "Pitucha",
    "age": 20,
    "type": "dog",
    "race": "luk",
    "ownerId": 2,
    "owner": {
      "name": "Fulano de Tal",
      "fone": "32323812"
    }
  },
  {
    "id": 1,
    "name": "Arukinha",
    "age": 4,
    "type": "dog",
    "race": "Pinscher",
    "ownerId": 1,
    "owner": {
      "name": "Ryan",
      "fone": "5585997154567"
    }
  },
  ...
]
```

#

### Update data

```
http://localhost:5000
PUT /animals/:id/update
```

#### Request:

| Body          | Type     | Description                |
| :------------ | :------- | :------------------------- |
| `fone`        | `string` | **Required**. owner phone  |
| `animalAge`   | `number` | **Required**. animal age   |

#### Response:

```json
status: 200
message: Record successfully updated!
```

### Remove animal data

```
http://localhost:5000
DELETE /animals/:id/remove
```

#### Response:

```json
status: 200
message: Record removed!
```

## Environment Variables

To run this project, you will need to add the following environment variables to your server .env file

`POSTGRES_USER=`

`POSTGRES_PASSWORD=`

`POSTGRES_DB=`

`POSTGRES_PORT=`

`HOST=`

`DATABASE_URL = postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${HOST}:${POSTGRES_PORT}/${POSTGRES_DB}?connect_timeout=300`

`PORT = number #recommended:5000`



To test this project, you will need to add the following environment variables to your server/.env.test file

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName`

</br>

## Run Locally

Clone the project

```bash
  git clone https://github.com/FKnight-cyber/health-desafio-desenvolvedor-junior-2.git
```

Go to the project directory

```bash
  cd https://github.com/FKnight-cyber/health-desafio-desenvolvedor-junior-2/server
```

### Install dependencies

```bash
  npm install 
```

### Create database

check your .env.test and inform your variables.

```bash
  npx prisma migrate dev
```

### Remember to setup .env file, checkout .env-example to run smoothly

## Start the server

```bash
  npm run dev
```

Run unit tests

```bash
  npm run test:unit
```

prisma will use .env.test for test purposes.

Front-end

```bash
  cd https://github.com/FKnight-cyber/health-desafio-desenvolvedor-junior-2/web
```

Install dependencies

```bash
  npm install 
```

Start server

```bash
  npm start
```
</br>

# Docker
### can copy the same variables at .env-example to .env 

On root folder run

```bash
  docker compose up --build
```
## Authors

-   Ryan Nicholas a full-stack developer looking for new challenges!.
<br/>

#
