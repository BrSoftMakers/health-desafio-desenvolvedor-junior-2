
import {Request, Response} from 'express'
import { CreatePetServices } from './../services.ts/CreatePetServices';



export class CreatePetControllers{
    async handle(request: Request, response: Response){
        const {name, age, tipo, raca, imagem, owner, phone} = request.body

        const service = new CreatePetServices();

        const result = await service.execute({name, age, tipo, raca, imagem, owner, phone})

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
    
}