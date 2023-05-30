import { Response, Request } from 'express'
import { MakeUpdatePetsUseCase  } from '../../use-cases/factories/make-update-pet-use-case'
import { z } from 'zod'
import { ResourceNotFoundError } from '../../use-cases/error/resource-not-found-error'

export class UpdatePetController {
    update = async (request: Request, response: Response) => {
        const petParamsSchema = z.object({
            id: z.string().uuid()
        })
        const updateBodySchema = z.object({
            name: z.string(),
            age: z.number(),
            imageUrl: z.string(),
            type: z.enum(['gato', 'cachorro']),
            race: z.string(),
            telephone: z.string(),
            petOwner: z.string()
        })
        const { id } = petParamsSchema.parse(request.params)
        const {name, age, imageUrl, petOwner, race, telephone, type } = updateBodySchema.parse(request.body)
        try {
            const updatePetUseCase = MakeUpdatePetsUseCase()
            const pet = await updatePetUseCase.update({
                id,
                name,
                age,
                imageUrl,
                race,
                petOwner,
                telephone,
                type,
            })
           
            return response.status(204).json(pet)
        } catch (error) {
            if (error instanceof ResourceNotFoundError) {
                return response.status(409).send({ message: error.message })
            }
        }
    }
}