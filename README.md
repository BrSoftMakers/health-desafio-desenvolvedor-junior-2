   <!-- Table of Contents -->
# :notebook_with_decorative_cover: Tópicos:

- [About the Project](#star2-about-the-project)
  * [Screenshots](#camera-screenshots)
  * [Tech Stack](#space_invader-tech-stack)
  * [Features](#dart-features)
- [Getting Started](#toolbox-getting-started)
  * [Prerequisites](#bangbang-prerequisites)
  * [Run Locally](#running-run-locally)

<!-- Sobre o Projeto -->
## :star2: About the Project

<!-- Screenshots -->
### :camera: Screenshots

<div align="center"> 
<a href="https://freeimage.host/i/HKaLF6v"><img src="https://iili.io/HKaLF6v.md.png" alt="HKaLF6v.md.png" border="0"></a>
</div>

<!-- Deployment -->
### :triangular_flag_on_post: Deployment

Foi realizado o deploy desse projeto utilizando as ferramentas Netlify (para realizar o deploy do front-end), Heroku (para realizar o deploy do back-end) e ElephantSQL (para criar uma instância do banco de dados online).

Para acessar o deploy da aplicação, basta acessar o link abaixo:

[Softpets](https://softpets.netlify.app/)

<!-- TechStack -->
### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://styled-components.com/">Styled-Components</a></li>
    <li><a href="https://react-hook-form.com/">React-Hook-Form</a></li>
    <li><a href="https://www.npmjs.com/package/yup">Yup</a></li>
    <li><a href="https://vitejs.dev/">Vite</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://nodejs.org/en/">NodeJS</a></li>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://expressjs.com/">Express.js</a></li>
    <li><a href="https://express-validator.github.io/docs/">Express-Validator</a></li>
    <li><a href="https://typeorm.io/">TypeORM</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
    <li><a href="https://www.elephantsql.com/">ElephantSQL</a></li>
  </ul>
</details>

<details>
<summary>DevOps</summary>
  <ul>
    <li><a href="https://www.netlify.com/">Netlify</a></li>
    <li><a href="https://dashboard.heroku.com/">Heroku</a></li>
  </ul>
</details>

<!-- Features -->
### :dart: Features

- Na aplicação, é possível listar todos os pets cadastrados.
- O usuário pode editar os pets cadastrados.
- O usuário pode excluir os pets cadastrados.
- O usuário pode cadastrar novos pets.

<!-- Prerequisites -->
### :bangbang: Prerequisites

Este projeto utiliza `npm` como gerenciador de pacotes. </br></br>
Também é necessário que você tenha o `PgAdmin 4` instalado e criado uma instância chamada `sofpets` rodando na porta padrão do PostgreSQL (PORTA 5432).

<!-- Run Locally -->
### :running: Run Locally

Clone o projeto

```bash
  git clone https://github.com/jpcchaves/desafio-desenvolvedor-junior-2.git
```

Rode os seguinte comandos nos diretórios do projeto <strong>Backend</strong> e <strong>Frontend</strong>

```bash
  cd backend
```

```bash
  cd frontend
```

Instale as dependências em ambos os diretórios

```bash
  npm install
```

No diretório `backend`, rode os seguintes comandos para criar as tabelas no banco de dados:

```bash
 npm run migration:generate
```

```bash
 npm run migration:run
```

Inicie o ambiente de desenvolvimento em ambos os diretórios

```bash
  npm run dev
```

</hr>
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
