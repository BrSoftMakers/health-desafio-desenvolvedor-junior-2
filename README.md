
# Como executar:

1. Realize o clone deste repositório para sua máquina, em seguida dentro da pasta raiz execute `npm install`para instalar as dependências.

2. Com o docker instalado e rodando um container com postgress, coloque as informações de senha e de porta a qual foram colocadas no seu container nos locais indicados `DATABASE_URL="postgresql://postgres:SENHA@localhost:PORTA/postgres?schema=public"`.

3. Após configurado .env e com o container em execução, rode o comando `npx prisma migrate dev` no terminal nessa pasta raiz.

4. Para iniciar o server da api execute o comando `npm run dev` na raiz da pasta.

5. Em seguida abra o terminal na pasta **front** e execute o comando `npm run dev` para iniciar o front end da aplicação.