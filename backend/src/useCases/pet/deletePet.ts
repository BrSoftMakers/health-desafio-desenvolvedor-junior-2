import { Request, Response } from 'express';
import { Pet } from '../../app/models/pet';

export async function deletePet(req: Request, res: Response) {
  try {
    const { petId } = req.params;

    await Pet.findByIdAndDelete(petId);

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
