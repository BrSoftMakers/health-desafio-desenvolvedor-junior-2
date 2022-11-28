import { database } from "../database";
import { Dono } from "../models/donos";
import { Request, Response } from "express";
import { Pet } from "../models/pet";

class PetController {
  async listAll(req: Request, res: Response) {
    try {
      Pet.sync();
      const pets = await Pet.findAll({
        include: Dono,
      });
      if (!pets)
        return res.status(400).json({ message: "Não há pets cadastrados" });

      return res.status(200).json(pets);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async listOne(req: Request, res: Response) {
    try {
      Pet.sync();
      const pet_id = req.body.id;

      const pet = Pet.findOne({
        where: {
          id: pet_id,
        },
      });

      if (!pet)
        return res.status(400).json({ message: "Pet não encontrado !" });

      return res.status(200).json(pet);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async deleteOne(req: Request, res: Response) {
    try {
      Pet.sync();
      const pet_id = req.body.id;

      const pet = Pet.findOne({
        where: {
          id: pet_id,
        },
      });

      if (!pet)
        return res.status(400).json({ message: "Pet não encontrado !" });

      await Pet.destroy({
        where: {
          id: pet_id,
        },
      });

      return res.status(200).json({ message: "Pet deletado com sucesso !" });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async updateOne(req: Request, res: Response) {
    try {
      Pet.sync();
      const { id, nome, raca, idade, especie, dono } = req.body;

      const pet = await Pet.findOne({
        where: {
          id: id,
        },
      });

      if (!pet)
        return res.status(400).send({ message: "Cliente não encontrado !" });

      await Pet.update(
        {
          nome: nome,
          raca: raca,
          idade: idade,
          especie: especie,
          donoId: dono,
        },
        {
          where: {
            id: id,
          },
        }
      );

      return res.status(200).json({ message: "Pet atualizado com sucesso !" });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async createOne(req: Request, res: Response) {
    try {
      Pet.sync();
      const { nome, raca, idade, especie, dono } = req.body.data;

      const novoPet = await Pet.create({
        nome: nome,
        raca: raca,
        idade: idade,
        especie: especie,
        donoId: dono,
      });

      return res.status(200).json({ message: novoPet });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
}

export default new PetController();
