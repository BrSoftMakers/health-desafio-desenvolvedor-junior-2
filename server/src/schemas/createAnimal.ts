import { z } from 'zod';

const bodySchema = z.object({
  ownerName: z.string(),
  fone: z.string(),
  animalName: z.string(),
  animalAge: z.number(),
  type: z.string(),
  race: z.string(),
});

export default bodySchema;
