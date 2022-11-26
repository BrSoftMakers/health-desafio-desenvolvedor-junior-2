import { AppDataSource } from '../data-source';
import { Pet } from '../entities/Pet';

export const petRepository = AppDataSource.getRepository(Pet);
