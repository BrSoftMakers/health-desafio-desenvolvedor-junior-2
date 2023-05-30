import { z } from 'zod';

const createSchema = z.object({
  ownerName: z.string(),
  fone: z.string(),
  animalName: z.string(),
  animalAge: z.number(),
  type: z.string(),
  race: z.string(),
});

const updateSchema = z.object({
  fone: z.string().optional(),
  animalAge: z.number().optional(),
});

const animalSchemas = {
  createSchema,
  updateSchema,
};

export default animalSchemas;
