import { PrismaPetsRepository } from "@/repositories/prisma/prisma-pets-repository"
import {  DeletePetUseCase } from "../delete-pet-use-case"


export const MakeDeletePetUseCase = () => {
    const petRepository = new PrismaPetsRepository()
    const deletePetUseCase = new DeletePetUseCase(petRepository)
    return deletePetUseCase
} 