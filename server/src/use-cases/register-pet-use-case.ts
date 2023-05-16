import { PetsPropsRequest, PetsPropsResponse, PetsRepository } from "../repositories/pets-repository";
import { MissingParamError } from "./error/missing-param-error";


export class RegisterPetUseCase {
    constructor(private readonly petsRepository: PetsRepository) { }

    register = async (data: PetsPropsRequest): Promise<PetsPropsResponse> =>  {
        if(!data.name) {
            throw new MissingParamError('name')
        }
        if (!data.imageUrl) {
            throw new MissingParamError('imageUrl')
        }
        if (!data.age) {
            throw new MissingParamError('age')
        }
        if (!data.race) {
            throw new MissingParamError('race')
        }
        if (!data.type) {
            throw new MissingParamError('type')
        }
        if (!data.petOwner) {
            throw new MissingParamError('petOwner')
        }
        if (!data.telephone) {
            throw new MissingParamError('telephone')
        }
        const pet = await this.petsRepository.create(data)
        return  pet 
    }
}