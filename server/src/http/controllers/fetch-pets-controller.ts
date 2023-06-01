import { Response, Request } from 'express'
import { MakeFetchPetsUseCase } from '../../use-cases/factories/make-fetch-pets-use-case'

export class FetchPetsController {
    findMany = async (_:Request, response: Response) => {
        try {
            const makeFetchPetsUseCase =  MakeFetchPetsUseCase()
            const pets = await makeFetchPetsUseCase.findMany()
            return response.status(200).json(pets)
        } catch (error) {
            console.log(error);
            
        }
    }
}