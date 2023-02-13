# Desafio - Desenvolvedor Fullstack Júnior 2 - Health

## Tabela de Conteúdos

- [Iniciando o backend](#1-iniciando-o-backend)
- [Iniciando o frontend](#2-iniciando-o-frontend)

---

## 1. Iniciando o backend

[ Voltar para o topo ](#tabela-de-conteúdos)

- Após feito o clone do projeto em sua máquina acesse o diretório referente ao backend;
- Execute o seguinte comando para instalar todas as dependencias necessárias:

```
yarn
```

- Com as dependencias já instaladas é necessário criar um banco de dados PostgreSQL;
- Após a criação do banco faça uma cópia do arquivo "dot.env.example", renomeie a cópia removendo o ".copy.example" tornando o nome do arquivo ".env";
- Tendo o arquivo ".env" na base do projeto o próximo passo a seguir é preencher as variáveis de ambiente correspondentes ao banco de dados PostgreSQL;
- Com as variáveis de ambiente preenchidas corretamente o próximo passo é gerar a tabela no banco de dados executando a migration, para isso execute o seguinte comando no terminal:

```
yarn typeorm migration:run -d src/data-source.js
```

- Com a migração persistida no banco de dados e a tabela criada é hora de colocar o servidor para funcionar, execute o seguinte comando para o servidor iniciar localmente na porta definida:

```
yarn dev
```

- PRONTO!! O backend da aplicação já deve estar funcionando.

---

## 2. Iniciando o frontend

[ Voltar para o topo ](#tabela-de-conteúdos)

- Com o backend funcionando, em outro terminal, acesse a pasta referente ao frontend do projeto;
- Execute o seguinte comando para instalar todas as dependencias necessárias:

```
yarn
```

- Com as dependencias já instaladas agora é só inicializar a aplicação utilizando o seguinte comando:

```
yarn start
```

- IMPORTANTE: Certifique-se que a porta que está sendo utilizada para executar o backend seja diferenta da utilizada para executar o front, feito isso a aplicação deve está funcionando perfeitamente.
