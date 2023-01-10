//IMPORTANDO O POSTGRES
import pg from 'pg';

//DETERMINANDO A VARIAVEL CLIENTE AO PG
const Client = pg.Client;
// EXPORTANDO A VARIAVEL CLIENTE COMO O NEWCLIENT
export const cliente = new Client({
    user: "postgres",
    password: "2602",
    host: "localhost",
    port: 5432,
    database: "petShopDB"
});
//TRY PARA RETORNAR MENSAGEM CASO A CONCEXÃO FALHE
try {
   cliente.connect();
        console.log('Banco conectado') //abrindo uma conexão
} catch (error) {
    console.log('Erro ao conectar ao banco.', error)
};