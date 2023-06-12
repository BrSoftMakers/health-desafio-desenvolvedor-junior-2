<center>
  <img src="./client/src/img/sm_md.png" alt="Imagem" />
</center>

## Desafio - Desenvolvedor Fullstack Júnior 2 - Health
<br>

<p>
Você deverá desenvolver um projeto no padrão MVC utilizando Node.js para o back-end e React.js para o front-end com a finalidade de que seja possível listar, visualizar, criar, editar, excluir animais de estimação de uma petshop.
</p>

> **Observações:**
> - Você deve utilizar o banco de dados relacional PostgreSQL para esse projeto;
> - Cada animal de estimação precisa ter um identificador único, nome, idade, se é gato ou cachorro e sua respectiva raça; Além do nome e telefone para contato de seu dono.

<br/>

# PetShop:

<p>
A aplicação é um sistema de petShop onde é possivel criar uma lista de Pets (nome, idade, se é cão ou gato, qual a raça, nome do dono e telefone para contato), editar, visualizar ou excluir os dados dos Pets cadastrados, tambem conhecido como CRUD. 
</p>


## Como rodar a aplicação(1º Back-end):
<br>

1. Crie um clone do repositorio para sua máquina:
```sh
git clone https://github.com/kingban00/health-desafio-desenvolvedor-junior-2.git
```

2. Acesse o diretorio clonado via terminal e na pasta raiz instale as dependencias:
```sh
npm install
```
4. Acesse o pgAdmin e crie um database com os seguintes parâmetros:

      Parâmetro   | Valor
      --------- | ------
      dbname | petshop
      username | postgres
      password | 123456
      host | localhost
      dialect | postgres
      port | 5432

5. Em seguida, execute o comando para iniciar o servidor:
```sh
node index
```
6. A resposta deverá ser:

```sh
Servidor está executando na porta 8000
Executing (default): SELECT 1+1 AS result
Conexão com o banco de dados realizada com sucesso!
```

## Como rodar a aplicação(Front-end):
<br>

1. Acesse o diretorio clonado via terminal e depois acesse o diretorio client:
```sh
cd frontend
```
2. Instale as dependencias:
```sh
npm install
```
3. Basta executar o comando:
```sh
npm start
```
4. Após isso, a aplicação deverá abrir automaticamente no navegador, caso não abra, acesse http://localhost:3000/ para visualizar a aplicação no navegador.

<br><br><br>


### Tecnologias Utilizadas(Back-end):
<br>

![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

### Tecnologias Utilizadas(Front-end):
<br>

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
