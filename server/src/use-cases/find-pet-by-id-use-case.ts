import { PetsPropsResponse, PetsRepository } from "../repositories/pets-repository";
import { ResourceNotFoundError } from "./error/resource-not-found-error";


export class FindPetByIdUseCase {
    constructor(private readonly petsRepository: PetsRepository) { }

    findById = async (id: string): Promise<PetsPropsResponse> => {
        const pets = await this.petsRepository.findById(id)
        if (!pets) {
            throw new ResourceNotFoundError()
        }

        return pets
    }
}