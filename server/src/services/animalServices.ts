import animalsRepository from '../models/animals';

async function listAll() {
  return animalsRepository.getAnimals();
}

const animalsService = {
  listAll,
};

export default animalsService;
