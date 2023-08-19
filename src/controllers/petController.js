const { Pool } = require('pg');

const pool = new Pool({
    user: 'Anthony',
    host: 'localhost',
    database: 'petshop_db',
    password: 'Oldhuntress@2004',
    port: 5432,
});

