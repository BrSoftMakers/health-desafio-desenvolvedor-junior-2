import { sequelize } from "./db";

export async function createRegisterUsers(nome: string, telefone: string, endereco: string) {
    
    return sequelize.models.Users.create({nome, telefone, endereco});
}

export async function searchAllUsers() {
    
    return sequelize.models.Users.findAll();

}

export async function searchUsers(id: number) {
    
    return sequelize.models.Users.findByPk(id);

}

export async function editUsers(id: number, nome: String, telefone: String, endereco: String) {
    return sequelize.models.Users.update({
        nome,
        telefone,
        endereco
    },
    {
        where: {
            id
        }
    });
}

export async function deleteUsers(id: number) {
    return sequelize.models.Users.destroy({
        where: {
            id
        }
    });
}