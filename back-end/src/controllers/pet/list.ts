import { Request, Response } from "express";
import Pet from "../../models/Pet";

const ListPets = async (req: Request, res: Response) => {
  const petList = await Pet.findAll();

  return res.json(petList);
}

export default ListPets;