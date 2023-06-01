import { PetsPropsRequest, PetsPropsResponse, PetsRepository } from "../repositories/pets-repository";


export class RegisterPetUseCase {
    constructor(private readonly petsRepository: PetsRepository) { }

    register = async (data: PetsPropsRequest): Promise<PetsPropsResponse> => {

        const pet = await this.petsRepository.create(data)
        return pet
    }
}