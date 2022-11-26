
import { petRepository } from './../repositories/petRepository';


export class DeletePetServices{
    async execute(id: string){
        if(!(petRepository.findOneById(id))){
            return new Error("Pet does not exists!")
        }
        await petRepository.delete(id)
    }
}