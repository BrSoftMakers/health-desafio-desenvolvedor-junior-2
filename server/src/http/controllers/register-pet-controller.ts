import { Response, Request } from 'express'
import { MakeRegisterPetUseCase } from '../../use-cases/factories/make-register-pet-use-case'
import { z } from 'zod'

export class RegisterPetController {
    register = async (request: Request, response: Response) => {
        const registerBodySchema = z.object({
            name: z.string().min(3),
            age: z.number().positive(),
            imageUrl: z.string().nonempty(),
            type: z.enum(['gato', 'cachorro']),
            race: z.string().nonempty(),
            telephone: z.string().nonempty(),
            petOwner: z.string().min(3)
        })
        const petData = registerBodySchema.parse(request.body)
        try {
            
            const registerUseCase = MakeRegisterPetUseCase()
            const pet = await registerUseCase.register(petData)
            const returnStatusMessage = {
                    pet,
                    links: {
                        deletePet: '/pet/:id',
                        updatePet: '/pet:id',
                        findPetById: '/pet/:id',
                        fetchPets: '/pet'
                    }
            }
            return response.status(201).json(returnStatusMessage)
        } catch (error) {
            console.error(error);
            return response.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }
}