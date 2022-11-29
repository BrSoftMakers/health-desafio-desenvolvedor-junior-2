
import { Request, Response } from 'express';
import { DeletePetServices } from './../services.ts/DeletePetServices';


export class DeletePetController{
    async handle(request: Request, response: Response){
        const {id} = request.params;

        const service = new DeletePetServices()

        const result = await service.execute(id)

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.status(204).json(result)
    }
}