import { checkError } from '../middlewares/errorHandler';
import animalsRepository from '../models/animals';
import {
  CreateAnimalRequestDto,
  UpdateAnimalRequestDto,
} from '../types/animalDtos';

async function listAll() {
  return animalsRepository.getAnimals();
}

async function insert(data: CreateAnimalRequestDto) {
  try {
    await animalsRepository.add(data);
  } catch (error) {
    console.log(error);
    throw checkError(404, 'Animal data creation failed');
  }
}

async function update(data: UpdateAnimalRequestDto, id: number) {
  try {
    await animalsRepository.updateData(data, id);
  } catch (error) {
    console.log(error);
    throw checkError(404, 'Info update failed!');
  }
}

const animalsService = {
  listAll,
  insert,
  update,
};

export default animalsService;
