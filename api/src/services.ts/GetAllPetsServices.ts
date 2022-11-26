
import { AppDataSource } from '../data-source';
import { Pet } from '../entities/Pet';
import { petRepository } from './../repositories/petRepository';

export class GetAllPetsServices{
    async execute(){
        const pets = await petRepository.find();
        return pets;
    }
}