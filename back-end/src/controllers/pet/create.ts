import { Request, Response } from "express";
import Pet from "../../models/Pet";

const CreatePet = async (req: Request, res: Response) => {
  const { nome, idade, tipo, raca, dono, telefone } = req.body;

  const newPet = await Pet.create({ nome, idade, tipo, raca, dono, telefone });

  if(!newPet) return res.status(400).json({ error: true });

  return res.status(201).json(newPet);
}

export default CreatePet;