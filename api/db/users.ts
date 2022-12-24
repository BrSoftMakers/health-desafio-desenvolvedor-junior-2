import { sequelize } from "./db";

export async function createRegisterUsers(nome: string, telefone: string, endereco: string) {
    
    return sequelize.models.Users.create({nome, telefone, endereco});
}