import { Request, Response } from 'express';
import { Category } from '../../app/models/category';

export async function deleteCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;

    await Category.findByIdAndDelete(categoryId);

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
