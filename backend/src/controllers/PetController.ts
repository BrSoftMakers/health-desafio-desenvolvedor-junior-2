import { database } from "../database";
import { Dono } from "../models/donos";
import { Request, Response } from "express";
import { Pet } from "../models/pet";

class PetController {
  async listAll(req: Request, res: Response) {
    try {
      Pet.sync();
    } catch (error) {}
  }

  async listOne(req: Request, res: Response) {
    try {
      Pet.sync();
    } catch (error) {}
  }

  async deleteOne(req: Request, res: Response) {
    try {
      Pet.sync();
    } catch (error) {}
  }

  async updateOne(req: Request, res: Response) {
    try {
      Pet.sync();
    } catch (error) {}
  }
}

export default new PetController();
