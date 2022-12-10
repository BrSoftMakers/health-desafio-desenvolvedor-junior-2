import { Request, Response } from "express";
import { validate as isValidUUID } from 'uuid';
import AppError from "../../errors/AppError";
import Pet from "../../models/Pet";

const DeletePet = async (req: Request, res: Response) => {
  const { id } = req.params;

  const foundPet = isValidUUID(id) ? await Pet.findByPk(id) : null;
  if(!foundPet) {
    throw new AppError(404, "Pet nao encontrado");
  }

  await foundPet.destroy();
  return res.status(204).json({});
}

export default DeletePet;