## 🏃 PRÉ-REQUISITOS

Para o projeto funcionar, você deverá ter:

- Node.js
- NPM
- Servidor PostgreSQL (opcional)



## 🚀 INSTALAÇÃO

### 🤖 Clonando o repositório

Primeiro clone o repositório:

```git
  git clone https://github.com/PauloHenriqueOliveiradeAlmeida/health-desafio-desenvolvedor-junior-2.git
```

então abra a pasta gerada pelo seu terminal:

```git
  cd health-desafio-desenvolvedor-junior-2
```

### 👾 Configurando o Banco de Dados


#### 1 - Importar o Arquivo 
Caso possua um servidor PostgreSQL, importe o arquivo ```PetShop.sql```, caso contrário,
pode pular esta etapa.


#### 2 - Configurar as Variáveis de Ambiente

edite o arquivo ```.env``` que está na pasta ```/api``` e adicione
suas informações de conexão com seu servidor Postgres.

Caso não possua um servidor, adicione as seguintes credenciais:

```
  databaseUser=guqawdrg
  databasePassword=0-TxvIIuFJEmJ4vmCYfrCZTVluzVyFcx
  databaseHost=kesavan.db.elephantsql.com
  databaseName=guqawdrg
```

### 📦 Instalando os Pacotes

#### Frontend

entre na pasta ```frontend``` e execute:

```
  npm install
```

#### Backend

entre na pasta ```api``` execute:

```
  npm install
```


## ☕ Testando

Abra a pasta ```frontend``` e execute:

```
  npm start
```

então é só abrir

http://localhost:3000

e ser feliz😁

<br>

 <blockquote>
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

</blockquote>
