import { PrismaService } from './../prisma.service';
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { DoarPetDto } from './dto/doar-pet.dto';


@Injectable()
export class PetsService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createPetDto: CreatePetDto, id: string) {

    const { nome, idade, raca, tipo } = createPetDto;
    try {
      const pet = await this.prisma.pets.create({
        data: {
          nome: nome,
          tipo: tipo,
          raca: raca,
          idade: idade,
          userId: id,
        }
      });
      return { message: 'Pet criado com sucesso', pet, statuscode: 201 };
    }
    catch (error) {
      console.log(error);
      throw new BadRequestException('Erro ao criar pet');
    }
  }

  async meusPets(userId: string) {

    const pets = await this.prisma.pets.findMany({
      where: {
        userId: userId,
      },
    });

    return pets;
  }

  async findAll() {

    const pets = await this.prisma.pets.findMany({
      include: {
        user: {
          select: {
            id: true,
            nome: true,
            telefone: true,
            cpf: true,
          },
        },
      },
    });

    const petsComDono = pets.map((pet) => {
      const { user, ...petData } = pet; // Remover o objeto `user` do objeto `pet`

      return {
        ...petData,
        updatedAt: undefined,
        dono: {
          id: user.id,
          nome: user.nome,
          telefone: user.telefone,
          cpf: user.cpf,
        },
      };
    });

    return petsComDono;


  }

  async findOne(id: string) {
    try {
      const pet = await this.prisma.pets.findUnique({
        where: {
          id: id,
        },
        include: {
          user: {
            select: {
              id: true,
              nome: true,
              telefone: true,
              cpf: true,
            },
          },
        },
      });

      const { user, ...petData } = pet; // Remover o objeto `user` do objeto `pet`

      const petComDono = {
        ...petData,
        updatedAt: undefined,
        dono: {
          id: user.id,
          nome: user.nome,
          telefone: user.telefone,
          cpf: user.cpf,
        },
      };

      return petComDono;
    }
    catch (error) {
      console.log(error);
      throw new BadRequestException('Pet não encontrado');
    }




  }

  async doarPet(id: string, doarPetDto: DoarPetDto) {
    const { cpfDono, cpfNovoDono } = doarPetDto;
    const pet = await this.findOne(id);

    const petDono = await this.prisma.user.findFirst({
      where: {
        cpf: cpfNovoDono,
      },
    });
    if (!petDono) {
      return { message: 'Novo dono não encontrado', statusCode: 404 };
    }

    if (!pet) {
      return { message: 'Pet não encontrado', statusCode: 404 };
    }
    if (pet.dono.cpf === cpfDono) {

      try {

        await this.prisma.pets.update({
          where: {
            id: id,
          },
          data: {
            userId: petDono.id,
          },
        });

        return { message: 'Pet doado com sucesso', statusCode: 200 }
      }
      catch (error) {
        console.log(error);
        throw new BadRequestException('Erro ao doar pet');
      }
    } else {
      throw new UnauthorizedException('Você não tem permissão para doar esse pet');
    }
  }

  async update(id: string, updatePetDto: UpdatePetDto, userId: string) {

    const { nome, idade, raca, tipo } = updatePetDto;

    const pet = await this.prisma.pets.findUnique({
      where: {
        id: id,
      },
    });
    if (!pet) {
      return { message: 'Pet não encontrado', statusCode: 404 };
    }
    if (pet.userId === userId) {
      try {
        await this.prisma.pets.update({
          where: {
            id: id,
          },
          data: {
            nome: nome,
            tipo: tipo,
            raca: raca,
            idade: idade,
          },
        });
        return { message: 'Pet atualizado com sucesso', statusCode: 200 };
      }
      catch (error) {
        console.log(error);
        throw new BadRequestException('Erro ao atualizar pet');
      }
    } else {
      throw new UnauthorizedException('Você não tem permissão para deletar esse pet');
    }
  }

  async remove(id: string, userId: string) {
    const pet = await this.prisma.pets.findUnique({
      where: {
        id: id,
      },
    });
    if (!pet) {
      return { message: 'Pet não encontrado', statusCode: 404 };
    }
    if (pet.userId === userId) {

      try {
        await this.prisma.pets.delete({
          where: {
            id: id,
          },
        });
        return { message: 'Pet deletado com sucesso', statusCode: 200 };
      }
      catch (error) {
        console.log(error);
        throw new BadRequestException('Erro ao deletar pet');
      }
    } else {
      throw new UnauthorizedException('Você não tem permissão para deletar esse pet');
    }
  }
}
