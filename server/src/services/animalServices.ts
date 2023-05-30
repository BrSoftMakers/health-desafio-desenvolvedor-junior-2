import { checkError } from '../middlewares/errorHandler';
import animalsRepository from '../models/animals';
import { CreateAnimalRequestDto } from '../types/animalDtos';

async function listAll() {
  return animalsRepository.getAnimals();
}

async function insert(data: CreateAnimalRequestDto) {
  try {
    await animalsRepository.add(data);
  } catch (error) {
    throw checkError(404, 'Animal data creation failed');
  }
}

const animalsService = {
  listAll,
  insert,
};

export default animalsService;
