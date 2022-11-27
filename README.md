<h1 align="center">PETS</h1>

<p align="center">Projeto desenvolvido para listar animais de estimação de uma petshop</p>


<h3 align="center">Sobre</h3>

<p align="center">Aplicação criada para solucionar desafio proposto como parte do processo seletivo, criar aplicação fullstack que liste, crie, atualize e delete animais de estimação de uma petshop</p>


### Features

- [x] Cadastro de Pet
- [x] Atualização de Pet
- [x] Buscar Pet pelo ID
- [x] Buscar todos os Pets
- [x] Remover Pet

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/dgleyramos1/health-desafio-desenvolvedor-junior-2.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd health-desafio-desenvolvedor-junior-2

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn api

# O servidor inciará na porta: 3333 - acesse <http://localhost:3333>

# É importante alterar as variaveis de ambiente para fazer a conexão com o banco de dados
# Crie o arquivo .env na rqaiz do seu projeto e coloque as seguintes linhas com as credencias do seu banco de dados
$ DB_HOST = <nomoe-do-host>
$ DB_PORT = <porta>
$ DB_NAME = <nome-do-banco>
$ DB_USER = <usuario>
$ DB_PASS = <senha>

# Aqui é a parta onde você deseja subir sua aplicação local
$ PORT=3333

# Gere as migrações de suas tabelas para o seu banco de dados
$ yarn migration:generate

# Agora rode essas migrações para que as tabelas sejam criadas no banco de dados
$ yarn migration:run
```


#### [](https://github.com/tgmarinho/Ecoleta#server-nodejs--typescript)**Dependências**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **dotenv**
-   **express**
-   **pg**
-   **reflect-metadata**
-   **rimraf**
-   **typeorm**
-   **uuid**

> Veja o arquivo  [package.json](https://github.com/dgleyramos1/health-desafio-desenvolvedor-junior-2/blob/main/package.json)

#### **Endpoints**

```bash
# GET -> Pega todos os animais cadastrados
$ /api/pets

# GET -> Pega somente um animal, se ele estiver cadastrado. Passando o ID como parâmetro
$ /api/pets/:id

# POST -> Cadastra animal
$ /api/pets

# PUT -> Atualiza animal no banco de dados. Passando o ID como parâmetro
$ /api/pets/:id

# DELETE -> Apaga animal do banco de dados. Passando o ID como parâmetro
$ /api/pets/:id

```

#### **Model**

##### Modelo de Pet:
-   **id** -> dado é gerado automaticamente pela dependência uuid
-	**name**
-	**age**
-	**tipo**
-	**raca**
-	**imagem** -> link da imagem
-	**owner**
-	**phone**


### 🎲 Rodando o Front End (client)


<h4 align="center"> 
	🚧  React Select 🚀 Em construção...  🚧
</h4>