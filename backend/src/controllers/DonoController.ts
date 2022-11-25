import { database } from "../database";
import { Dono } from "../models/donos";
import { Request, Response } from "express";
import { Pet } from "../models/pet";

class DonoController {
  async listAll(req: Request, res: Response) {
    try {
      await database.sync();
      const donos = await Dono.findAll({
        include: Pet,
      });
      if (!donos)
        return res.status(400).send({ message: "Cliente não encontrado !" });
      return res.status(200).json(donos);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  async listOne(req: Request, res: Response) {
    try {
      await database.sync();
      const cliente = req.body.id;
      const dono = await Dono.findOne({
        where: {
          id: cliente,
        },
      });
      if (!dono)
        return res.status(400).send({ message: "Cliente não encontrado !" });
      return res.status(200).json(dono);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  async deleteOne(req: Request, res: Response) {
    try {
      await database.sync();
      const cliente = req.body.id;
      const dono = await Dono.findOne({
        where: {
          id: cliente,
        },
      });
      if (!dono)
        return res.status(400).send({ message: "Cliente não encontrado !" });
      await Dono.destroy({
        where: {
          id: cliente,
        },
      });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
}

export default new DonoController();
