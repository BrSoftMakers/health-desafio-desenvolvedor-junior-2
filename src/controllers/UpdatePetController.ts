
import { Request, Response } from 'express';
import { UpdatePetServices } from './../services.ts/UpdatePetServices';


export class UpdatePetController{
    async handle(request: Request, response: Response){
        const {id} = request.params

        const {name, age, tipo, raca, imagem, owner, phone} = request.body

        const service = new UpdatePetServices();

        const result = await service.execute({id, name, age, tipo, raca, imagem, owner, phone})

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}