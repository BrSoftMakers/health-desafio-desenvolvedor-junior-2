import { Species } from "@prisma/client";

import { Request, Response } from "express";

import PetModel from "../models/pet.model";

const petModel = new PetModel();

class PetController {
  public async listPets(req: Request, res: Response) {
    try {
      const pets = await petModel.listPets();
      res.json(pets);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  public async getPet(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const pet = await petModel.getPet(id);

      if (pet) {
        res.json(pet);
      } else {
        res.status(404).json({ error: "Pet not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  public async createPet(req: Request, res: Response) {
    const { name, imageURL, dateOfBirth, species, breed, ownerName, ownerPhone } = req.body;

    try {
      const pet = await petModel.createPet({
        name,
        imageURL,
        dateOfBirth,
        species,
        breed,
        ownerName,
        ownerPhone,
      });

      res.status(201).json(pet);
    } catch (error) {
      res.status(500).json({ error: `${error}` });
    }
  }

  public async updatePet(req: Request, res: Response) {
    const { id } = req.params;
    const { name, imageURL, dateOfBirth, species, breed, ownerName, ownerPhone } = req.body;

    try {
      const petData: {
        name?: string;
        imageURL?: string;
        dateOfBirth?: Date;
        species?: Species;
        breed?: string;
        ownerName?: string;
        ownerPhone?: string;
      } = {};

      if (name) petData.name = name;
      if (imageURL) petData.imageURL = imageURL;
      if (dateOfBirth) petData.dateOfBirth = dateOfBirth;
      if (species) petData.species = species;
      if (breed) petData.breed = breed;
      if (ownerName) petData.ownerName = ownerName;
      if (ownerPhone) petData.ownerPhone = ownerPhone;

      const pet = await petModel.updatePet(id, petData);

      res.json(pet);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  public async deletePet(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const pet = await petModel.deletePet(id);

      res.json(pet);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default PetController;
