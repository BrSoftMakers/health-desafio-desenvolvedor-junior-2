import { sequelize } from "./db";
import Pet from "../models/pet.model"
export async function createRegisterPets(data: Pet) {
    
    return sequelize.models.Pets.create({
        nome: data.nome,
        idade: data.idade,
        especie: data.especie,
        raca: data.raca,
        nomeDono: data.nomeDono,
        telefoneDono: data.telefoneDono
    });
}

export async function searchAllPets() {
    
    return sequelize.models.Pets.findAll();

}

export async function searchPets(id: number) {
    
    return sequelize.models.Pets.findByPk(id);

}

export async function editPets(data: Pet) {
    return sequelize.models.Pets.update({
        data
    },
    {
        where: {
            id: data.id
        }
    });
}

export async function deletePets({id}: Pet) {
    return sequelize.models.Pets.destroy({
        where: {
            id
        }
    });
}


