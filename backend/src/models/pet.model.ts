import { PrismaClient, Species } from "@prisma/client";

const prisma = new PrismaClient();

class PetModel {
  public async listPets() {
    return prisma.pet.findMany({});
  }

  public async getPet(id: string) {
    return prisma.pet.findUnique({
      where: {
        ID: id,
      },
    });
  }

  public async createPet(data: {
    name: string;
    imageURL: string;
    dateOfBirth: Date;
    species: Species;
    breed: string;
    ownerName: string;
    ownerPhone: string;
  }) {
    return prisma.pet.create({ data });
  }

  public async updatePet(
    id: string,
    data: {
      name?: string;
      imageURL?: string;
      dateOfBirth?: Date;
      species?: Species;
      breed?: string;
      ownerName?: string;
      ownerPhone?: string;
    }
  ) {
    return prisma.pet.update({ where: { ID: id }, data });
  }

  public async deletePet(id: string) {
    return prisma.pet.delete({ where: { ID: id } });
  }
}

export default PetModel;
