import { Request, Response } from "express";
import AppError from "../../errors/AppError";
import Pet from "../../models/Pet";

const CreatePet = async (req: Request, res: Response) => {
  const { nome, idade, tipo, raca, dono, telefone } = req.body;

  const newPet = await Pet.create({ nome, idade, tipo, raca, dono, telefone });
  if(!newPet) {
    throw new AppError(400, "Dados invalidos");
  }

  return res.status(201).json(newPet);
}

export default CreatePet;