 ![SoftMakers](https://www.softmakers.com.br/assets/img/logotipo14xxhdpi.png)

# Desafio - Desenvolvedor Fullstack Júnior 2 - Health
Esse é o teste tecnico para Desenvolvedor Fullstack Júnior 2 na Health Team da SoftMakers.

## A proposta do desáfio
Desenvolver um projeto no padrão MVC utilizando Node.js para o back-end e React.js para o front-end com a finalidade de que seja possível listar, visualizar, criar, editar, excluir animais de estimação de uma petshop.
> **Observações:**
> - Necessário utilizar o banco de dados relacional PostgreSQL para esse projeto;
> - Cada animal de estimação precisa ter um identificador único, nome, idade, se é gato ou cachorro e sua respectiva raça; Além do nome e telefone para contato de seu dono.

## ⚙️ Funcionalidades

- [x] Interface com cores que possibilitam um visual moderno e agradável
- [x] Possibilidade de criar, editar, excluir, visualizar e listar os pets
- [x] Armazenamento em banco de dados PostgreSQL
- [x] Frontend desenvolvido utilizando HTML, CSS, Javascript, Typescript e ReactJS
- [x] Backend desenvolvido utilizando Javascript, Typescript, e NodeJS
- [X] Utilização de Express para desenvolvimento da API
- [X] Utilização de ORM Sequelize para consulta e comunicação com o banco de dados
- [X] Tratamento assincrono de erros em NodeJS
- [X] Documentação da API

---

## 🚀 Como executar o projeto

💡 Este projeto disponibiliza tanto a parte frontend como a parte backend! Ao iniciar o servidor os dois funcionam corretamente.

As stacks estão dividas em 2, cada uma em sua devida pasta.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o projeto

```bash

# Clone este repositório
$ git clone https://github.com/jonathan-wanderley/challenge-brsoftmakers-devjunior2.git

# Acesse a pasta do backend no terminal/cmd/git-bash
$ cd backend

# Instale as dependências
$ npm install

# Use o arquivo .env.example para configurar suas variaveis de ambiente
# Você pode apenas renomear o arquivo .env.example para .env e configurar o campos
# Nos campos DB_NAME, DB_USER, DB_PASS DB_USER, DB_PASS, DB_HOST e DB_PORT ficam os dados do banco relacional PostegreSQL

# No campo PORT digite a porta que você deseja que o servidor/site use, por padrão deixei na porta 3000

# Após configurar é só salvar seu arquivo .env com suas variaveis de ambiente

# Antes de iniciarmos o servidor backend, precisamos rodar as migrations para deixar nosso banco de dados pronto pra uso.
# Para isso digite no terminal/cmd/git-bash
% npx sequelize-cli db:migrate

# Após todos esses comandos, temos nosso backend pronto para ser executado.
# Para isso execute a aplicação com o seguinte comando:
$ npm run start

# O servidor inciará na porta configurada no arquivo .env
# Acesse http://localhost:3000

# Agora que temos nossa API rodando, vamos rodar também nosso frontend...
# Afinal, o que queremos mesmo é interagir com o servidor!

# Para isso volte uma pasta digitando:
$ cd ../

# Agora entre na pasta frontend
$ cd frontend

# Instale as dependências
$ npm install

# Após ter as dependencias instaladas, abra o arquivo api.tsx que está dentro da pasta src
# Ele tem o seguinte diretorio: frontend/src/api.tsx

# Mude o link da URL para o Link da API que subimos, se vc não mudou a porta
# Então pode deixar o valor padrão como está:
# baseURL: "http://localhost:3000"

# Agora é só iniciar:
$ npm run dev


```

## 📜 Sugestão de melhorias caso o PetShop venha se expandir

Um projeto com padrão MVC tem uma arquitetura mais simples e direta, porém caso o o petshop venha se expandir e precisar de um sistema mais robusto (ex: cadastro e login dos donos, estoque de produtos para animais)...
Então será interessante construir nossa API em camadas bem separadas, principalmente separando em controllers, usecases e repositories, pois na arquitetura em MVC tudo é mais junto... quando separamos e dividimos cada camada com sua respectiva responsabilidade deixamos o codigo mais legivel e facilitamos futuras manutenções.

## 🦸 Autor


 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/97256161?v=4" width="100px;" alt=""/>
 <sub><b>Jonathan Wanderley</b></sub> 🚀

[![Gmail Badge](https://img.shields.io/badge/-jonathan.wpc@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jonathan.wpc@gmail.com)](mailto:jonathan.wpc@gmail.com)

---

Feito com 💜 por Jonathan Wanderley 👋🏽 [Entre em contato!](https://www.linkedin.com/in/jonathan-wanderley/)

---
