import { Request, Response } from 'express';
import { petRepository } from '../repositories/petRepository';

import { validationResult} from 'express-validator';

import { Pet } from '../types/Pet';

export class PetController {

  async createPet(req: Request, res: Response) {

    const {name, age, catOrDog, breed, owner, ownerContact}: Pet = req.body;

    if (!name || !age || !catOrDog || !breed || !owner || !ownerContact) {
      return res.status(400).json({errors: 'É preciso preencher todos os campos para continuar.'});
    }

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()[0].msg });
    }

    try {

      const newPet = petRepository.create({
        name,
        age,
        catOrDog,
        breed,
        owner,
        ownerContact
      });

      await petRepository.save(newPet);

      return res.status(201).json(newPet);

    } catch (error) {
      console.log(error);
      res.status(500).json({errors: 'Internal Server Error'});
    }

  }

  async listAllPets(req: Request, res: Response){
    try {
      const allPets = await petRepository.find();
      return res.status(200).json(allPets);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getPetById(req: Request, res: Response){
    try {
      const { petId } = req.params;

      if (!(await petRepository.findOneBy({ id: Number(petId) }))) {
        return res.status(400).json({ message: 'Pet não encontrado' });
      }

      const pet = await petRepository.findOneBy({id: Number(petId)});

      return res.status(200).json(pet);

    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async deletePet(req: Request, res: Response) {

    try {
      const { petId } = req.params;

      if (!(await petRepository.findOneBy({ id: Number(petId) }))) {
        return res.status(400).json({ message: 'Pet não encontrado' });
      }

      await petRepository.delete(petId);

      return res.status(204).end();

    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async updatePet(req: Request, res: Response){

    try {

      const { petId } = req.params;
      const {name, age, catOrDog, breed, owner, ownerContact}: Pet = req.body;

      if (!(await petRepository.findOneBy({ id: Number(petId) }))) {
        return res.status(400).json({ message: 'Pet não encontrado' });
      }


      if (!name||!age || !catOrDog|| !breed || !owner || !ownerContact) {
        return res.status(400).json({errors: 'É preciso preencher todos os campos para continuar.'});
      }

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()[0].msg });
      }

      const updatedPet = {name, age, catOrDog, breed, owner, ownerContact};

      await petRepository.update(petId, updatedPet);

      return res.status(201).json(updatedPet);

    } catch (error) {

      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' });

    }
  }
}
