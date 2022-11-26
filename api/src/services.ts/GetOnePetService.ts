import { Pet } from "../entities/Pet";
import { AppDataSource } from '../data-source';
import { petRepository } from './../repositories/petRepository';


export class GetOnePetService{
    async execute(id: string): Promise<Pet | Error>{
        const pet = await petRepository.findOneById(id);
        if(!pet){
            return new Error("Pet does not exists!")
        }
        return pet;
    }
}