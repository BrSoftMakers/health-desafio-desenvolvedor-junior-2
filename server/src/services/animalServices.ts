import { checkError } from '../middlewares/errorHandler';
import animalsRepository from '../models/animals';
import ownerRepository from '../models/owner';
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
    throw checkError(500, 'Animal data creation failed');
  }
}

async function update(data: UpdateAnimalRequestDto, id: number) {
  try {
    const animal = await animalsRepository.findById(id);
    if (!animal) throw checkError(404, 'Animal not registered!');

    await animalsRepository.updateData(data, id);

    if (data.fone) {
      const { ownerId } = await animalsRepository.findById(id);
      await ownerRepository.updateData(data.fone, ownerId);
    }
  } catch (error) {
    console.log(error);
    throw checkError(error.status, error.message);
  }
}

async function removeById(id: number) {
  try {
    const animal = await animalsRepository.findById(id);
    if (!animal) throw checkError(404, 'Animal not registered!');

    await animalsRepository.removeById(id);
  } catch (error) {
    console.log(error);
    throw checkError(error.status, error.message);
  }
}

const animalsService = {
  listAll,
  insert,
  update,
  removeById,
};

export default animalsService;
