# Projeto - PetMania

## 🔨 Desenvolvimento

## Proposta:
Você deverá desenvolver um projeto no padrão MVC utilizando Node.js para o back-end e React.js para o front-end com a finalidade de que seja possível listar, visualizar, criar, editar, excluir animais de estimação de uma petshop.

## Implementação:

Desenvolvi uma aplicação estilo dashboard em que é possível listar, editar e remover Pets e obter os dados dos seus respectivos tutores por meio do ID. A aplicação conta com uma pagina de login e cadastro de administradores que utiliza o Firebase + JWT para autenticação.

Como implementação futura pode ser criado um formulário adicional para adição e remoção de clientes, uma vez que os dados existentes são carregados no momento em que o banco de dados é gerado.

## 💻 Tecnologias e Metodologias utilizadas

* NodeJS
* Express
* JWT
* Sequelize + Postgres
* Firestorage Database
* Material UI
* Docker


# Atenção! ⚠️
## Na pasta raiz do back-end existe um arquivo <code>env.do.projeto</code> com todas as variáveis de ambiente necessárias para uso da aplicação. Renomei-a para <code>.env</code> para que ela seja reconhecível.

## 🛠 Instalação local

Clone o projeto:

```bash
  git clone git@github.com:jjgouveia/health-desafio-desenvolvedor-junior-2.git
```

Vá até a pasta do projeto:

```bash
  cd health-desafio-desenvolvedor-junior-2
```
📍 Inicie a orquestração do container docker resposnável pelo banco de dados da aplicação:

```
docker compose up -d
```

📍 Instale as dependências do projeto:
1. Na pasta front-end:
```bash
    npm run install
```
2. Na pasta back-end

```bash
    npm run install
```

📍 Inicie a aplicação:

3. back-end
   
1️⃣ Primeiro iremos carregar e popular os dados do banco.
```bash
  npm run db:reset
  ```
2️⃣ Em seguida iniciaremos o servidor
  ```bash
  npm run dev
```

4. front-end
```bash
   npm run dev
```

📍 Acesse a aplicação em http://localhost:5173

📍 Acesso padrão:
```bash
  email: adm@admin.com
  senha: admin123
```

