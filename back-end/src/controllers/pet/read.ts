import { Request, Response } from "express";
import { validate as isValidUUID } from 'uuid';
import AppError from "../../errors/AppError";
import Pet from "../../models/Pet";

const ReadPet = async (req: Request, res: Response) => {
  const { id } = req.params;

  const foundPet = isValidUUID(id) ? await Pet.findByPk(id) : null;
  if(!foundPet) {
    throw new AppError(400, "Pet nao encontrado");
  }
  
  return res.json(foundPet);
}

export default ReadPet;