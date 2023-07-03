# Pet Health

Aplicação destinada ao cadastro, busca, exclusão e alteração de dados de Pet (gato e cachorro) e seu dono.

## Tecnologias usadas no back-end

- nodeJs
- express
- dotenv
- cors
- joi
- pg
- pg-hstor
- sequelize
- nodemon

## Tecnologias usadas

Ps: foi utilizado o vite para gerar o projeto

- reactJs
- typescript
- axios
- tailwindcss
- react-router-dom
- formik
- yup
- phosphor-icons

## Requisitos

Requisitos minimo para rodar o back-end da aplicação:

- NodeJs v14 ou superior
- Postgres
- Docoker (opcional)

Observação: Se tiver o docker instalado e não tiver o postgres, basta cria um container com o postgres.

Exemplro de um container myslq na versão 8

Use esse comando no termina

```bash
docker run --name my-postgres -e "POSTGRES_USER=postgres" -e "POSTGRES_PASSWORD=12345678" -p 5432:5432 -d postgres

```

## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:eemr3/health-desafio-desenvolvedor-junior-2.git
```

Entre no diretório do projeto

```bash
  cd health-desafio-desenvolvedor-junior-2
```

Instale as dependências

```bash
  npm install
```

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no aquivo `.env` dentro do diretório raiz na pasta `backend`

Entre na pasta `backend` e crie um arquivo `.env`, adicione as variavei de ambiente listadas abaixo
(Os valor que está após o variável é um exemplo, você terá que por os valores correspondente a sua configuração)

`POSTGRES_USERNAME`=root

`POSTGRES_PWD`=123456

`POSTGRES_HOST`=localhost

## Criar o banco de dados

Dentro da pasta `backend` rode o comando:

```bash
npm run database
```

O banco de dados é criado com as tabelas `owners_db` e `pets_db` e é populado com algumas informaçoes iniciais.

### Subir o servidor (API)

Dentro da pasta `backend` rode o comando:

```bash
npm run dev
```

## Rodando o frontend do projeto localmente

Ps: A aplicação web só funcionara se o backend estiver rodando

Dentro da pasta `frontend` rode o comando:

```bash
npm run dev
```
