
import { Pet } from '../entities/Pet';
import { petRepository } from './../repositories/petRepository';

type PetRequest = {
    name: string
    age: string
    tipo: string
    raca: string
    imagem: string
    owner: string
    phone: string
}


export class CreatePetServices{
    async execute({name, age, tipo, raca, imagem, owner, phone}: PetRequest): Promise<Pet | Error>{
        const pet = petRepository.create({
            name,
            age,
            tipo,
            raca,
            imagem,
            owner,
            phone
        })

        if(!(await petRepository.save(pet))){
            return new Error("Pet does not created")
        }

        return pet
    }
}