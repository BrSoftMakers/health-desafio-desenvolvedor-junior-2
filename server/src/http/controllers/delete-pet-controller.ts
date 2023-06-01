import { Response, Request } from 'express'
import { MakeDeletePetUseCase } from '../../use-cases/factories/make-delete-pet-use-case'
import { z } from 'zod'

export class DeletePetController {
    delete = async (request: Request, response: Response) => {
        const petParamsSchema = z.object({
            id: z.string().uuid()
        })

        const { id } = petParamsSchema.parse(request.params)

        try {
            const deletePetUseCase = MakeDeletePetUseCase()
            await deletePetUseCase.delete(id)
            return response.status(204).send()
        } catch (error) {
           
        }
    }
}