import { PrismaPetsRepository } from "../../repositories/prisma/prisma-pets-repository"
import { RegisterPetUseCase } from "../register-pet-use-case"


export const MakeRegisterPetUseCase = () => {
    const petRepository = new PrismaPetsRepository()
    const registerPetUseCase = new RegisterPetUseCase(petRepository)
    return registerPetUseCase
} 