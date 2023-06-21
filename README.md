# health-desafio-desenvolvedor-junior-2

Projeto feito para teste técnico: health-desafio-desenvolvedor-junior-2
Deploy feito em: https://health-desafio-desenvolvedor-junior-2-nine.vercel.app

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
- [Banco de dados](#Banco)

## Instalação

Se desejar usar localmente será necessário entrar na pasta /backend e usar o comando:

```javascript
npm install
```

em seguida ir até o diretório /frontend/petshop e usar novamente o comando:

```javascript
npm install
```

para que sejam instaladas todas as dependências do node.

## Uso

Na pasta do backend utilizar o comando:

```javascript
npm run start:dev
```

e na pasta do frontend utilizar o comando:

```javascript
ng serve
```

## Banco

O projeto utiliza um banco de dados PostgreSQL remoto para salvar os dados. Se desejar utilizar outro banco, siga estas etapas:

1. Vá até a pasta /backend/prisma.
2. Altere a URL no arquivo schema.prisma para a nova URL do banco desejado.
3. Utilize o seguinte comando:

```javascript
npx prisma generate
```

Isso irá regenerar os modelos do Prisma com base nas configurações atualizadas.

Lembre-se de ajustar as instruções conforme necessário, especificamente em relação aos comandos para iniciar o backend e o frontend, dependendo das necessidades do seu projeto.
