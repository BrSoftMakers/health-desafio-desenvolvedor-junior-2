import { PetsRepository } from "../repositories/pets-repository";

export class DeletePetUseCase {
    constructor(private readonly petsRepository: PetsRepository) { }
    delete = async (id: string) => {
        const pets = await this.petsRepository.delete(id)
        return pets
    }
}