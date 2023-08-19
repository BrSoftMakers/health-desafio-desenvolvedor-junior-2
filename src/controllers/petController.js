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
        res.status(201).json({ message: 'Pet adicionado com sucesso!' });
    } catch (error) {
        console.error('Erro ao adicionar o pet', error);
        res.status(500).json({ error: 'Erro ao adicionar o pet.' });
    }
};

const listarPets = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM pets');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Erro ao listar os pets:', error);
        res.status(500).json({ error: 'Erro ao listar os pets.' });
    }
};

const visualizarPetPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM pets WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'Pet não encontrado' });
        } else {
            res.status(200).json(result.rows[0]);
        }
    } catch (error) {
        console.error('Erro ao visualizar o pet:', error);
        res.status(500).json({ error: 'Erro ao visualizar o pet.'});
    }
}