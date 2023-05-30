import prisma from '../database';
import { CreateAnimalRequestDto } from '../types/animalDtos';

async function getAnimals() {
  return await prisma.animal.findMany({
    include: {
      owner: {
        select: {
          name: true,
          fone: true,
        },
      },
    },
  });
}

async function add(data: CreateAnimalRequestDto) {
  await prisma.owner.upsert({
    where: { name: data.ownerName },
    create: {
      name: data.ownerName,
      fone: data.fone,
    },
    update: {
      fone: data.fone,
    },
  });

  const { id } = await prisma.owner.findFirst({ where: { fone: data.fone } });

  await prisma.animal.create({
    data: {
      ownerId: id,
      name: data.animalName,
      age: data.animalAge,
      type: data.type,
      race: data.race,
    },
  });
}

const animalsRepository = {
  getAnimals,
  add,
};

export default animalsRepository;
