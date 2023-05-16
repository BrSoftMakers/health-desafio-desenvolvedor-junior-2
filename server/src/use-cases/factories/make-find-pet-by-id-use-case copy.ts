import { PrismaPetsRepository } from "@/repositories/prisma/prisma-pets-repository"
import {  FindPetByIdUseCase } from "../find-pet-by-id-use-case"


export const MakeFindPetByIdUseCase = () => {
    const findPetByIdRepository = new PrismaPetsRepository()
    const findPetByIdUseCase = new FindPetByIdUseCase(findPetByIdRepository)
    return findPetByIdUseCase
} 