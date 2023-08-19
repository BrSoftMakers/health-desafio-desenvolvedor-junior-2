const { Pool } = require('pg');

const pool = new Pool({
    user: 'Anthony',
    host: 'localhost',
    database: 'petshop_db',
    password: 'Oldhuntress@2004',
    port: 5432,
});

const adicionarPet = async (req, res) => {
    const { nome, idade, tipo, raca, nome_dono, telefone_dono } = req.body;
    const query = 'INSERT INTO pets (nome, idade, tipo, raca, nome_dono, telefone_dono) VALUES ($1, $2, $3, $4, $5, $6)';


    try {
        await pool.query(query, [nome, idade, tipo, raca, nome_dono, telefone_dono]);
        res.status(201).json({message: 'Pet adicionado com sucesso!'});
    }catch (error) {
        console.error('Erro ao adicionar o pet', error);
        res.status(500).json({error: 'Erro ao adicionar o pet.'});
    }
};