import prisma from '../database';

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

const animalsRepository = {
  getAnimals,
};

export default animalsRepository;
