Clone o repositório do projeto a partir do GitHub: https://github.com/Anthony4Dev/health-desafio-desenvolvedor-junior-2;                                              Após clonar o repositório, verifique se você possui todas as dependências instaladas.

 No diretório raiz do projeto, execute o seguinte comando para instalar as dependências do backend: "npm install";

Importe o arquivo .sql no PostgreSQL;

Certifique-se de ter o PostgreSQL instalado e em execução;

Crie um novo banco de dados chamado petshop_db no PostgreSQL, se ainda não existir;

No diretório onde está localizado o arquivo .sql (por exemplo, C:\backup_bd), execute o seguinte comando para importar o banco de dados: "pg_restore --username=postgres --dbname=petshop_db --verbose banco_de_dados_petshop.sql";

Ligando o servidor:
No diretório raiz do projeto (onde está localizado o arquivo server.js), abra um terminal e execute o seguinte comando: 
"node src/server.js";
    
Abra um segundo terminal e navegue até a pasta petshop-frontend para iniciar a aplicação frontend:

No terminal, navegue até o diretório petshop-frontend do projeto clonado usando o comando cd (change directory):
"cd petshop-frontend"

Assim que estiver no cd do 'petshop-frontend' digite: "npm start" para iniciar a aplicação
