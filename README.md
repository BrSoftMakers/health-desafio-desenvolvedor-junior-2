
# API Crud - Petshop

Esse projeto permite o gerenciamento da área de cadastros de cliente de um petshop, garantindo a entrega de um crud que faz consulta, atualização, listagem, e deleta informações de cadastro a qualquer momento.
Utilizando as tecnologias no back-end: Node-js e no Front-end: ReactJs.
## Referência

 - [Readme editor](https://readme.so/pt/editor)
 - [Node.js docs](https://nodejs.org/en/docs/)
 - [React.js docs](https://reactjs.org/docs/getting-started.html)


## Documentação da API

#### Retorna todos os itens cadastrados em banco.

```http
  GET / getUsers
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `setUsers` | `string` |   Retorna dados cadastrados em banco de dados.|

#### Retorna um item

```http
  POST/addUsers
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `addUsers`  | `string` |  Adiciona os itens importados do front ao banco de dados. |

#### adiciona os itens solicitados.


```http
  PUT/updateUser/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `updateUser`| `string` |   Atualiza os cadastros por meio do ID. |

#### atualiza os cadastros por meio do ID.


```http
  DELETE/deleteUser/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id_anim`| `string` |     Deleta os usuários cadastrados. |

#### Deleta os cadastros por meio do ID.
## Apêndice

Esse projeto permite o gerenciamento da área de cadastros de cliente de um petshop, garantindo a entrega de um crud que faz consulta, atualização, listagem, e deleta informações de cadastro a qualquer momento.



## Autores

- [@pvictortm](https://github.com/pvictortm)


## Funcionalidades

- Listar usuários cadastrados em banco.
- Atualizar usários cadastrados em banco.
- Salvar usuários que desejam ser cadastrados.
- Deletar usuários cadastrados em banco.


## Instalação

- Instale node.js.
 Download no site oficial.

- Instale as dependências:
```bash
  npm install express nodemon cors pg parse-editor ps sequelize
```

- Instale as dependências do ReactJS.
```bash
    testing-library/jest-dom
    testing-library/react
    testing-library/user-event
    axios
    react
    react-dom
    react-icons
    react-scripts
    react-toastify
    styled-components
    web-vitals
```
    
## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/pvictortm/health-desafio-desenvolvedor-junior-2
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```


## Stack utilizada

**Front-end:** React, Redux, TailwindCSS

**Back-end:** Node, Express

