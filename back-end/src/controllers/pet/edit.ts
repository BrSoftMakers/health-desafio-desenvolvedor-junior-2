import { Request, Response } from "express";
import AppError from "../../errors/AppError";
import Pet from "../../models/Pet";

const EditPet = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, idade, tipo, raca, dono, telefone } = req.body;

  const petToUpdate: any = await Pet.findByPk(id);
  if(!petToUpdate) {
    throw new AppError(400, "Dados invalidos");
  }
  
  petToUpdate.nome = nome;
  petToUpdate.idade = idade
  petToUpdate.tipo = tipo
  petToUpdate.raca = raca
  petToUpdate.dono = dono
  petToUpdate.telefone = telefone

  petToUpdate.save();

  return res.status(200).json(petToUpdate);
}

export default EditPet;