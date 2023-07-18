# Projeto Petshop

Este é um projeto desenvolvido como parte do processo seletivo para a vaga de Desenvolvedor Fullstack Júnior 2. O objetivo deste projeto é criar uma aplicação que permita listar, visualizar, criar, editar e excluir animais de estimação de uma petshop.

[![Exemplo do site funcionando](https://www.youtube.com/watch?v=1r8T8iBCT4I)](https://www.youtube.com/watch?v=1r8T8iBCT4I)

## Tecnologias Utilizadas

- Front-end: HTML, CSS, JavaScript, React.js
- Back-end: Node.js, PostgreSQL

## Passo a Passo para Executar a Aplicação

### Pré-requisitos

- Node.js instalado
- Banco de dados PostgreSQL configurado

### Deploy desse projeto rodando

### Instalação

Clone este repositório em sua máquina local:

```bash
git clone https://github.com/Williansouzh/health-desafio-desenvolvedor-junior-2.git
Acesse o diretório do projeto:

bash
Copy code
cd petshop
Instale as dependências do back-end: npm install

bash
Copy code
cd backend
npm install
Configure o banco de dados PostgreSQL no arquivo .env, fornecendo as informações necessárias.

Execute as migrações do banco de dados:

CREATE TABLE IF NOT EXISTS pets (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  idade INTEGER NOT NULL,
  tipo VARCHAR(255) NOT NULL,
  raca VARCHAR(255) NOT NULL,
  dono_nome VARCHAR(255) NOT NULL,
  dono_telefone VARCHAR(255)
);

bash
Copy code
npx sequelize-cli db:migrate
Inicie o servidor do back-end:

bash
Copy code
npm run start:dev
Em uma nova janela do terminal, navegue até o diretório do front-end:

bash
Copy code
cd ../frontend
Instale as dependências do front-end:

bash
Copy code
npm install
Inicie o servidor de desenvolvimento do front-end:

bash
Copy code
npm start
Abra o navegador e acesse a aplicação em http://localhost:3000.

Contato
Para mais informações ou dúvidas sobre este projeto, entre em contato pelo e-mail: williansouza4041@gmail.com
```
