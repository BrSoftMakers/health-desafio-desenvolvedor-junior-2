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
      return res.status(500).json({ message: error });
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
      return res.status(500).json({ message: error });
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

      await Pet.destroy({
        where: {
          dono_pet: cliente,
        },
      });

      await Dono.destroy({
        where: {
          id: cliente,
        },
      });

      return res
        .status(200)
        .json({ message: "Cliente deletado com sucesso !" });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async updateOne(req: Request, res: Response) {
    try {
      await database.sync();
      const { id, nome, numero } = req.body;

      const dono = await Dono.findOne({
        where: {
          id: id,
        },
      });

      if (!dono)
        return res.status(400).send({ message: "Cliente não encontrado !" });

      await Dono.update(
        {
          nome: nome,
          numero: numero,
        },
        {
          where: {
            id: id,
          },
        }
      );

      return res
        .status(200)
        .json({ message: "Cliente atualizado com sucesso !" });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
}

export default new DonoController();
