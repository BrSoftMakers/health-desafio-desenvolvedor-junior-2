import { PrismaPetsRepository } from "@/repositories/prisma/prisma-pets-repository"
import { FetchPetsUseCase } from "../fetch-pets-use-case"


export const MakeFetchPetsUseCase = () => {
    const petRepository = new PrismaPetsRepository()
    const fetchPetsUseCase = new FetchPetsUseCase(petRepository)
    return fetchPetsUseCase
} 