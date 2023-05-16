import { PrismaPetsRepository } from "@/repositories/prisma/prisma-pets-repository"
import { UpdatePetUseCase } from "../update-pet-use-case"


export const MakeUpdatePetsUseCase = () => {
    const petRepository = new PrismaPetsRepository()
    const updatePetUseCase = new UpdatePetUseCase(petRepository)
    return updatePetUseCase
} 