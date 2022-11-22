const { Pet } = require('../../models/pet');


const getAllPets =  async (req, res) => {
  try {
    const pets = await Pet.findAll({
      order: [
        ['createdAt', 'DESC']
      ]
    });

    res.status(200).json(pets);

  } catch (err) {
    res.status(400).json({'error': err});
  }
}

const getPetById = async (req, res) => {
  try {
    const id = req.params.id;
    const fieldsPet = await Pet.findAll({
      where: {
        id: id
      }
    });

    res.status(200).json(fieldsPet);

  } catch(err){
    res.status(400).json({'error': err});
  }
}

const createPet = async (req, res) => {
 
  try {
    
    const petFields = req.body.data;

    await Pet.create(petFields);
    res.status(201).json({message: 'Pet added with success.'});

  } catch(err){
    
    res.status(400).json({'error': err});
  }
}

const updatePet = async (req, res) => {
  try {
    const id = req.params.id;
    const fields = req.body.data;

    await Pet.update(fields, {
      where: {
        id: id
      }
    });

    res.status(200).json({message: 'Pet was updated with success!'});

  } catch (err) {
    res.status(400).json({'error': err});
  }
}

const deletePet = async (req, res) => {
  try {
    const id = req.params.id;
    await Pet.destroy({
      where: {
        id: id,
      }
    })

    res.status(200).json({message: 'Pet was deleted with success!'});

  } catch (err) {
    res.json(400).json({'error': err});

  }
}

const getAllDogs = async (req, res) => {
  try {
    
    const dogs = await Pet.findAll({
      where: {
        type: 'dog'
      },
      order: [
        ['createdAt', 'DESC']
      ]
    });

    res.status(200).json(dogs);

  } catch(err){
    res.status(400).json({'error': err});

  }
}

const getAllCats = async (req, res) => {
  try {
    
    const cats = await Pet.findAll({
      where: {
        type: 'cat'
      }, 
      order: [
        ['createdAt', 'DESC']
      ]
    });

    res.status(200).json(cats);

  } catch(err){
    res.status(400).json({'error': err});

  }
}


module.exports = {
  getAllPets,
  getPetById,
  createPet,
  updatePet,
  deletePet,
  getAllDogs,
  getAllCats
}