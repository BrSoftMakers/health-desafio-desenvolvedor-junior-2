import {PetsPropsResponse, PetsRepository } from "../repositories/pets-repository";

export class FetchPetsUseCase {
    constructor(private readonly petsRepository: PetsRepository) { }

    findMany = async (): Promise<PetsPropsResponse[]> => {
        const pets = await this.petsRepository.findMany()
        return pets
    }
}