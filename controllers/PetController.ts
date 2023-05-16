import { Request, Response } from 'express';
import { Pet } from '../models/Pet';
import petValidation from '../validations/petValidation';
export default class PetController {
  static async GetAll(req: Request, res: Response) {
    const pets = await Pet.findAll();
    return res.json(pets);
  }

  static async GetById(req: Request, res: Response) {
    var { id } = req.params;
    var pet = await Pet.findOne({
      where: {
        id,
      },
    });
    if (pet == null) {
      return res.status(404).json();
    }
    return res.json(pet);
  }

  static async AddPet(req: Request, res: Response) {
    try {
      const body = req.body;
      console.log(body);
      const pet = await petValidation.validate(body);

      await Pet.create(pet);
      return res.json(pet);
    } catch (e: any) {
      return res.status(400).json(e.errors);
    }
  }

  static async EditPet(req: Request, res: Response) {
    try {
      const body = req.body;
      var { id } = req.params;
      var pet = await Pet.findOne({
        where: {
          id,
        },
      });
      if (pet == null) {
        return res.status(404).json();
      }
      const petUpdated = await petValidation.validate(body);

      await Pet.update(petUpdated, {
        where: {
          id,
        },
      });
      return res.json(petUpdated);
    } catch (e: any) {
      return res.status(400).json(e.errors);
    }
  }

  static async RemovePet(req: Request, res: Response) {
    var { id } = req.params;

    var pet = await Pet.findOne({
      where: {
        id,
      },
    });
    if (pet == null) {
      return res.status(404).json();
    }

    await Pet.destroy({
      where: { id },
    });
    return res.status(201).json();
  }
}
