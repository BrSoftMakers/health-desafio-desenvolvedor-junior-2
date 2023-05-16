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

<h1 align="center">
    PET HOUSE
</h1>


## 🚀 Technologies

Tecnologias utilizadas no frondend

- [ViteJs](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCss](https://tailwindcss.com)
- [Eslint](https://eslint.org/)
- [axios](https://axios-http.com/docs/intro)
- [react-hook-form]()
- [zod]()
- [React-router-dom]()

Tecnologias utilizadas no backend

- [NodeJs](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [PrismaORM](https://www.prisma.io)
- [Postgres](https://www.postgresql.org)
- [express](https://www.docker.com)
- [Vitest]()
- [zod]()


**Siga as etapas abaixo para instalar as dependências necessárias**

```bash
# Install the dependencies web
# Aplicacao web esta rodando na porta 5173
$ npm install


$ Depois rode o comando `npm run dev` para inicar a aplicacao `web`
```

<h1>Documentação da API</h1>

<h2>
   🐋 Rodando no Docker
  
</h2>

**:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. ou na documentação como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**
> :information_source: Rode os serviços docker na pasta server com o comando `docker-compose up -d --build`.
- O postgres esta usando a porta padrão (`5432`), ou adapte, caso queria fazer uso da aplicação localmente;
- Esses serviços irão inicializar dois containers chamado `pet-api`;
- Depois rode o comando  `npx prisma migrate dev` no terminal do container `pet-api` para gerar as tabelas do banco 
<h2>Acesso à API</h2>
#A API estará disponível nos seguintes endpoints:

```javascript
  Base URL: http://localhost:3001
```
#Certifique-se de que o banco de dados também esteja em execução na porta 5432

<h2>Rotas da API</h2>
<h3>Registrar um pet</h3>

```javascript
  Endpoint: POST /pet
```
#Cria um novo registro de pet no sistema.
<p>Corpo da solicitação</p>
<p>Exemplo de corpo da solicitação JSON:</p>

```json
{
	"name":"any_name",
	"age": 5,
	"imageUrl":"any_imageUrl",
	"race":"any_race",
	"type":"cachorro",
	"petOwner":"any_pet_owner",
	"telephone":"1132-456"
}
```

<h4>Resposta de sucesso</h4>

```javascript
Código de status: 201 Created
```
<p>Exemplo de corpo de resposta JSON:</p>

```json
{
	"pet": {
		"id": "b9f89a79-dec0-4d74-8419-757babc86e87",
		"name": "any_name",
		"age": 5,
		"imageUrl": "any_imageUrl",
		"race": "any_race",
		"type": "cachorro",
		"petOwner": "any_pet_owner",
		"telephone": "1132-456",
		"creation_date": "2023-05-16T17:57:28.967Z"
	},
	"links": {
		"deletePet": "/pet/:id",
		"updatePet": "/pet:id",
		"findPetById": "/pet/:id",
		"fetchPets": "/pet"
	}
}
```

<h3>Listar pets</h3>

```javascript
  Endpoint: GET /pet
```

#Recupera a lista de todos os pets registrados.

<h4>Resposta de sucesso</h4>

```javascript
Código de status: 200 OK
```

<p>Exemplo de corpo de resposta JSON:</p>


```json
[
	{
		"id": "9d9b85e9-c163-49d4-9d96-99111848d8b0",
		"name": "any_name",
		"age": 5,
		"imageUrl": "any_imageUrl",
		"race": "any_race",
		"type": "cachorro",
		"petOwner": "any_pet_owner",
		"telephone": "1132-456",
		"creation_date": "2023-05-16T17:56:13.205Z"
	},
	{
		"id": "b9f89a79-dec0-4d74-8419-757babc86e87",
		"name": "any_name",
		"age": 5,
		"imageUrl": "any_imageUrl",
		"race": "any_race",
		"type": "cachorro",
		"petOwner": "any_pet_owner",
		"telephone": "1132-456",
		"creation_date": "2023-05-16T17:57:28.967Z"
	}
]
```

<h3>Encontrar pet por ID</h3>

```javascript
  Endpoint: GET /pet/:id
```

#Recupera as informações de um pet específico com base em seu ID.

<h4>Parâmetros de entrada</h4>

```jsvascript
id (uuid) - O ID do pet.
```

<h4>Resposta de sucesso</h4>

```javascript
Código de status: 200 OK
```

<p>Exemplo de corpo de resposta JSON:</p>


```json
	{
		"id": "9d9b85e9-c163-49d4-9d96-99111848d8b0",
		"name": "any_name",
		"age": 5,
		"imageUrl": "any_imageUrl",
		"race": "any_race",
		"type": "cachorro",
		"petOwner": "any_pet_owner",
		"telephone": "1132-456",
		"creation_date": "2023-05-16T17:56:13.205Z"
	}
```


<h3>Deletar pet</h3>

```javascript
  Endpoint: DELETE /pet/:id
```

#Remove um pet do sistema com base em seu ID.

<h4>Parâmetros de entrada</h4>

```jsvascript
id (uuid) - O ID do pet a ser deletado.
```

<h4>Resposta de sucesso</h4>

```javascript
Código de status: 204 No Content
```


<h3>Atualizar um pet</h3>

```javascript
  Endpoint: PATCH /pet/:id
```

#Atualiza as informações de um pet específico com base em seu ID.

<h4>Parâmetros de entrada</h4>

```jsvascript
id (uuid) - O ID do pet a ser deletado.
```
//Golden retriever
<p>Corpo da solicitação</p>
<p>Exemplo de corpo da solicitação JSON:</p>

```json
{
	"name":"any_name",
	"age": 5,
	"imageUrl":"any_imageUrl",
	"race":"any_race",
	"type":"cachorro",
	"petOwner":"any_pet_owner",
	"telephone":"1132-456"
}
```

<h4>Resposta de sucesso</h4>

```javascript
Código de status: 200 OK
```

<p>Exemplo de corpo de resposta JSON:</p>


```json
	{
		"id": "9d9b85e9-c163-49d4-9d96-99111848d8b0",
		"name": "any_name",
		"age": 5,
		"imageUrl": "any_imageUrl",
		"race": "any_race",
		"type": "cachorro",
		"petOwner": "any_pet_owner",
		"telephone": "1132-456",
	}
```
