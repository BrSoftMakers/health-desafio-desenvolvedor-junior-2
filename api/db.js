const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',  
  user: 'postgres',
  database: 'seu-pet',
  password: '1234',
  port: 5432, // or your custom port
});

pool.on('connect', () => {
  console.log('Conectado ao banco de dados');
});

pool.on('error', (err) => {
  console.error('Erro na conexão com o banco de dados:', err);
});

module.exports = {
  pool,
};
