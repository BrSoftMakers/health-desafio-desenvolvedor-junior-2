
import { petRepository } from './../repositories/petRepository';
import { Pet } from './../entities/Pet';


type UpdateRequest = {
    id: string
    name: string
    age: number
    tipo: string
    raca: string
    imagem: string
    owner: string
    phone: string
}

export class UpdatePetServices{
    async execute({id, name, age, tipo, raca, imagem, owner, phone }: UpdateRequest): Promise<Pet | Error>{
        const pet = await petRepository.findOneById(id)

        if(!pet){
            return new Error("Pet does not exists!")
        }

        pet.name = name ? name : pet.name;
        pet.age = age ? age : pet.age;
        pet.tipo = tipo ? tipo : pet.tipo;
        pet.raca = raca ? raca : pet.raca;
        pet.imagem = imagem ? imagem : pet.imagem;
        pet.owner = owner ? owner : pet.owner;
        pet.phone = phone ? phone : pet.phone;

        await petRepository.save(pet)

        return pet

        
    }
}