import { sequelize } from "../models/database";
import Pet from "../interfaces/pet.interface"
import { Request, response, Response } from "express";
export async function createRegisterPets(request: Request, response: Response) {
    const data = request.body;
    console.log(data);
    

    sequelize.models.Pets.create({
        nome: data.nome,
        idade: data.idade,
        especie: data.especie,
        raca: data.raca,
        nomeDono: data.nomeDono,
        telefoneDono: data.telefoneDono
    }).catch((err) => {
        return response.json(err);
    });

    return response.status(200).json({created: true});
}

export async function searchAllPets(_: Request, response: Response) {
    
    const datas = await sequelize.models.Pets.findAll().catch((err) => {
        return response.json(err);
    });

    return response.status(200).json(datas);

}

export async function getPetWithId(request: Request, response: Response) {

    const id = request.query.id?.toString();

    const datas = await sequelize.models.Pets.findByPk(id).catch((err) => {
        return response.json(err);
    });

    return response.status(200).json(datas);
}

export async function deletePets(request: Request, response: Response) {

    const id = request.query.id;

    await sequelize.models.Pets.destroy({
        where: {
            id
        }
    }).catch((err) => {
        return response.json({err});
    });

    return response.status(200).json({deleted: true});
}


