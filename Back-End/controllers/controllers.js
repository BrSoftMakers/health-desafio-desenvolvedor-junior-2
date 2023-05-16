const Pets = require("../models/Pets");



function checkAllFieldsFilled(req) {
  const { nome, idade, raca, dono, contato } = req.body;

  if (!nome || !idade || !raca || !dono || !contato) {
    const error = new Error('Por favor, preencha todos os campos.');
    error.status = 400;
    throw error;
  }
}

async function checkExistingPet(nome, dono) {
  try {
    const existingPet = await Pets.findOne({ where: { nome, dono } });
    return existingPet !== null;
  } catch (error) {
    console.log('Erro ao verificar pet existente:', error);
    return false;
  }
}

async function registerPet(req, res, next) {
  try {
    checkAllFieldsFilled(req);

    const { nome, idade, especie, raca, dono, contato } = req.body;

    const petExiste = await checkExistingPet(nome, dono);
    if (petExiste) {
      return res.status(409).json({ error: 'Pet já existe no cadastro.' });
    }

    const newPet = await Pets.create({
      nome,
      idade,
      especie,
      raca,
      dono,
      contato,
    });

    res.json({ success: 'Pet registrado com sucesso.', pet: newPet });
  } catch (error) {
    next(error);
  }
}

async function editPet(req, res, next) {
  try {
    checkAllFieldsFilled(req);

    const { nome, idade, especie, raca, dono, contato } = req.body;

    const petId = req.params.id;
    const existingPet = await Pets.findByPk(petId);
    if (!existingPet) {
      return res.status(404).json({ error: 'Pet não encontrado.' });
    }

    res.json({ success: 'Pet atualizado com sucesso.', pet: existingPet });
  } catch (error) {
    next(error);
  }
}


async function getPetById(req, res, next) {
  try {
    const petId = parseInt(req.params.id, 10);

    if (!petId) {
      return res.status(400).json({ error: 'O parâmetro ID é obrigatório.' });
    }

    const pet = await Pets.findByPk(petId);

    if (!pet) {
      return res.status(404).json({ error: 'Pet não encontrado.' });
    }

    res.json({ pet: pet });
  } catch (error) {
    console.log('Erro ao buscar pet por ID:', error);
    res.status(500).json({ error: 'Erro ao buscar pet por ID. Por favor, tente novamente mais tarde.' });
  }
}
async function deletePet(req, res, next) {
  try {
    const petId = req.params.id;
    const existingPet = await Pets.findByPk(petId);
    if (!existingPet) {
      return res.status(404).json({ error: 'Pet não encontrado.' });
    }
    await Pets.destroy({ where: { id: petId } });

    res.json({ success: 'Pet removido com sucesso.' });
  } catch (error) {
    next(error);
  }
}



module.exports = {
  registerPet,
  editPet,
  getPetById,
  deletePet
};
