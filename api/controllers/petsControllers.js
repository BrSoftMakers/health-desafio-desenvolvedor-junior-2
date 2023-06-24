const { pool } = require('../db');
const Pet = require('../models/Pets');


// Obtém todos os animais de estimação
const listPets = (_, res) => {
  const query = 'SELECT id, nome, idade, especie, raca, "nomeDono", "telefoneDono", "createdAt", "updatedAt" FROM public."Pets"';

  pool.query(query, (error, result) => {
    if (error) {
      console.error('Erro ao obter os animais de estimação:', error);
      return res.status(500).json({ error: 'Erro ao obter os animais de estimação' });
    }

    // Mapear os resultados do banco de dados para objetos Pet
    const pets = result.rows.map(row => {
      return new Pet(
        row.id,
        row.nome,
        row.idade,
        row.especie,
        row.raca,
        row.nomeDono,
        row.telefoneDono,
        row.createdAt,
        row.updatedAt
      );
    });

    res.status(200).json(pets);
  });
};

// Obtém detalhes de um animal de estimação específico
const getPetDetails = (req, res) => {
  const petId = req.params.id;
  const query = 'SELECT id, nome, idade, especie, raca, "nomeDono", "telefoneDono", "createdAt", "updatedAt" FROM public."Pets" WHERE id = $1';

  pool.query(query, [petId], (error, result) => {
    if (error) {
      console.error('Erro ao obter os detalhes do animal de estimação:', error);
      return res.status(500).json({ error: 'Erro ao obter os detalhes do animal de estimação' });
    }

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Animal de estimação não encontrado' });
    }

    const row = result.rows[0];
    const pet = new Pet(
      row.id,
      row.nome,
      row.idade,
      row.especie,
      row.raca,
      row.nomeDono,
      row.telefoneDono,
      row.createdAt,
      row.updatedAt
    );

    res.status(200).json(pet);
  });
};

// Adiciona um novo animal de estimação
const createPet = async (req, res) => {
  try {
    const { nome, idade, especie, raca, nomeDono, telefoneDono } = req.body;

    if (!nome) {
      return res.status(400).json({ error: 'O nome do pet é obrigatório' });
    }

    const currentDate = new Date();
    const createdAt = currentDate.toISOString().slice(0, 10);
    const updatedAt = createdAt;

    const query = 'INSERT INTO public."Pets" (nome, idade, especie, raca, "nomeDono", "telefoneDono", "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
    const values = [nome, idade, especie, raca, nomeDono, telefoneDono, createdAt, updatedAt];

    const result = await pool.query(query, values);
    const newRow = result.rows[0];

    const pet = new Pet(
      newRow.id,
      newRow.nome,
      newRow.idade,
      newRow.especie,
      newRow.raca,
      newRow.nomeDono,
      newRow.telefoneDono,
      newRow.createdAt,
      newRow.updatedAt
    );

    res.status(201).json(pet);
  } catch (error) {
    console.error('Erro ao criar o pet:', error);
    res.status(500).json({ error: 'Erro ao criar o pet' });
  }
};


// Atualiza um animal de estimação existente
const updatePet = async (req, res) => {
  const { nome, idade, especie, raca, nomeDono, telefoneDono } = req.body;
  const petId = req.params.id;

  try {
    // Verificar se a coluna "createdAt" já existe na tabela
    const checkColumnQuery = `
      SELECT EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_name = 'Pets' AND column_name = 'createdAt'
      )`;
    const checkColumnResult = await pool.query(checkColumnQuery);
    const columnExists = checkColumnResult.rows[0].exists;

    let query;
    let values;

    if (columnExists) {
      // A coluna "createdAt" já existe
      query = `
        UPDATE public."Pets"
        SET nome = $1, idade = $2, especie = $3, raca = $4, "nomeDono" = $5, "telefoneDono" = $6, "updatedAt" = NOW()
        WHERE id = $7
        RETURNING *`;
      values = [nome, idade, especie, raca, nomeDono, telefoneDono, petId];
    } else {
      // A coluna "createdAt" não existe, incluí-la na atualização
      query = `
        UPDATE public."Pets"
        SET nome = $1, idade = $2, especie = $3, raca = $4, "nomeDono" = $5, "telefoneDono" = $6, "createdAt" = NOW(), "updatedAt" = NOW()
        WHERE id = $7
        RETURNING *`;
      values = [nome, idade, especie, raca, nomeDono, telefoneDono, petId];
    }

    const result = await pool.query(query, values);
    const updatedRow = result.rows[0];

    const pet = new Pet(
      updatedRow.id,
      updatedRow.nome,
      updatedRow.idade,
      updatedRow.especie,
      updatedRow.raca,
      updatedRow.nomeDono,
      updatedRow.telefoneDono,
      updatedRow.createdAt,
      updatedRow.updatedAt
    );

    res.status(200).json(pet);
  } catch (error) {
    console.error('Erro ao atualizar o pet:', error);
    res.status(500).json({ error: 'Erro ao atualizar o pet' });
  }
};

 


// Deleta um animal de estimação existente
const deletePet = async (req, res) => {
  const petId = req.params.id;

  // Verificar se o ID do pet foi fornecido
  if (!petId) {
    return res.status(400).json({ error: 'ID do pet não fornecido' });
  }

  try {
    const query = 'DELETE FROM public."Pets" WHERE id = $1 RETURNING *';
    const result = await pool.query(query, [petId]);
    const deletedRow = result.rows[0];

    // Verificar se o objeto deletedRow está definido
    if (!deletedRow) {
      return res.status(404).json({ error: 'Pet não encontrado' });
    }

    const pet = new Pet(
      deletedRow.id,
      deletedRow.nome,
      deletedRow.idade,
      deletedRow.especie,
      deletedRow.raca,
      deletedRow.nomeDono,
      deletedRow.telefoneDono,
      deletedRow.createdAt,
      deletedRow.updatedAt
    );

    res.status(200).json(pet);
  } catch (error) {
    console.error('Erro ao deletar o pet:', error);
    res.status(500).json({ error: 'Erro ao deletar o pet' });
  }
};



module.exports = {
  listPets,
  getPetDetails,
  createPet,
  updatePet,
  deletePet,
};
