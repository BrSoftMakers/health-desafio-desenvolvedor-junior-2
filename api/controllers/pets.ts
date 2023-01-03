import { sequelize } from "../models/database";
import { Request, Response } from "express";
import Pet from "../interfaces/pet.interface";
export async function createRegisterPets(request: Request, response: Response) {
    const data: Pet = request.body;
    
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

export async function editPet(request: Request, response: Response) {
    const data: Pet = request.body;

    const editedDatas = await sequelize.models.Pets.update(
        {
            nome: data.nome,
            idade: data.idade,
            especie: data.especie,
            raca: data.raca,
            nomeDono: data.nomeDono,
            telefoneDono: data.telefoneDono
        },
        {
            where: {
                id: data.id
            }
        }
        ).catch((err) => {
        return response.json(err);
    });

    return response.status(200).json({updated: true});
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


