import { Request, Response } from "express";
import { validate as isValidUUID } from 'uuid';
import Pet from "../../models/Pet";

const ReadPet = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  const foundPet = isValidUUID(id) ? await Pet.findByPk(id) : null;
  if(!foundPet) return res.status(404).json({ error: true, msg: "not found" });

  return res.json(foundPet);
}

export default ReadPet;