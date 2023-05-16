import { Response, Request } from 'express'
import { MakeFindPetByIdUseCase } from '../../use-cases/factories/make-find-pet-by-id-use-case copy'
import { z } from 'zod'
import { ResourceNotFoundError } from '@/use-cases/error/resource-not-found-error'
import { MissingParamError } from '@/use-cases/error/missing-param-error'

export class FindPetByIdController {
    findById = async (request: Request, response: Response) => {
        const petParamsSchema = z.object({
            id: z.string().uuid()
        })
       
        const { id } = petParamsSchema.parse(request.params)
        
        try {
            const findPetByIdUseCase = MakeFindPetByIdUseCase()
            const pet = await findPetByIdUseCase.findById(id)

            return response.status(200).json(pet)
        } catch (error) {
            if (error instanceof MissingParamError) {
                return response.status(409).send({ message: error.message })
            }
        }
    }
}