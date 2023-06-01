import prisma from '../database';

async function updateData(fone: string, id: number) {
  await prisma.owner.update({
    where: { id },
    data: {
      fone,
    },
  });
}

const ownerRepository = {
  updateData,
};

export default ownerRepository;
