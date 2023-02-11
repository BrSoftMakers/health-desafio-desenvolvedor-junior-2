import { Request, Response } from 'express';
import { Category } from '../../app/models/category';
import { io } from '../..';

export async function createCategory(req: Request, res: Response) {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Please name is required' });
    }

    const category = await Category.create({ name });
    const categoryDetails = await category.populate('name');

    io.emit('category@new', categoryDetails);
    res.status(201).json(category);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
