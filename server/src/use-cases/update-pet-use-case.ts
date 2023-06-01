import { PetsPropsResponse, PetsRepository, UpdatePetsPropsRequest } from "../repositories/pets-repository";
import { ResourceNotFoundError } from "./error/resource-not-found-error";




export class UpdatePetUseCase {
    constructor(private readonly petsRepository: PetsRepository) { }

    update = async (data: UpdatePetsPropsRequest): Promise<PetsPropsResponse> => {
        const pets = await this.petsRepository.findById(data?.id)
        if (!pets) {
            throw new ResourceNotFoundError()
        }
        await this.petsRepository.update(data)
        return pets
    }
}