import { Request, Response } from "express";
import { GetOnePetService } from './../services.ts/GetOnePetService';



export class GetOnePetController{
    async handle(request: Request, response: Response){
        const {id} = request.params

        const service = new GetOnePetService();

        const result = await service.execute(id)

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}