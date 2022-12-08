import { Request, Response } from "express";
import { validate as isValidUUID } from 'uuid';
import Pet from "../../models/Pet";

const DeletePet = async (req: Request, res: Response) => {
  const { id } = req.params;

  const foundPet = isValidUUID(id) ? await Pet.findByPk(id) : null;
  if(!foundPet) return res.status(404).json({ error: true, msg: "not found" });

  await foundPet.destroy();
  return res.status(204).json("");
}

export default DeletePet;