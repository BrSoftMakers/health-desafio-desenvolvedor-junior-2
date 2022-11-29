import { Request, Response } from "express"
import { GetAllPetsServices } from './../services.ts/GetAllPetsServices';


export class GetAllPetsController {
    async handle(request: Request, response: Response){
        const service = new GetAllPetsServices()

        const pets = await service.execute()

        return response.json(pets)
    }
}