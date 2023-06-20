/* eslint-disable prefer-const */
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {

  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
  ) { }

  async findUser(token: string) {
    const payload = await this.jwtService.verifyAsync(token, {
      secret: 'jwtConstants.secret',
    });
    const user = await this.prisma.user.findUnique({
      where: {
        id: payload.id,

      },
    });
    if (!user) {
      throw new BadRequestException('Usuario nao encontrado');
    }
    return { usuario: user.nome }


  }
  async create(createAuthDto: CreateAuthDto) {
    let { nome, email, cpf, senha, telefone } = createAuthDto;

    const userExists = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (userExists) {
      throw new BadRequestException('Email ja cadastrado');
    }
    const cpfExists = await this.prisma.user.findUnique({
      where: {
        cpf: cpf,
      },
    });
    if (cpfExists) {
      throw new BadRequestException('Cpf ja cadastrado');
    }

    const salt = bcrypt.genSaltSync(10);
    senha = bcrypt.hashSync(senha, salt);

    try {
      const user = await this.prisma.user.create({
        data: {
          nome: nome,
          email: email,
          cpf: cpf,
          senha: senha,
          telefone: telefone,
        },
      });
      return {
        ...user,
        senha: undefined,
      };
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Erro ao criar usuario');
    }
  }
  async login(loginAuthDto: LoginAuthDto) {
    const { email, senha } = loginAuthDto;
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      throw new BadRequestException('Usuario nao encontrado');
    }

    const isMatch = bcrypt.compareSync(senha, user.senha);
    if (!isMatch) {
      throw new BadRequestException('Senha invalida');
    }
    const payload = { id: user.id, email: user.email };
    const token = await this.jwtService.signAsync(payload);
    return {
      token: token,
    };
  }
  async findAll() {
    const users = await this.prisma.user.findMany();
    return users.map((user) => {
      return {
        ...user,
      };
    });
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    if (!user) {
      throw new BadRequestException('Usuario nao encontrado');
    }
    return user;
  }

  update(id: string, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  async remove(id: string) {

    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    if (!user) {
      throw new BadRequestException('Usuario nao encontrado');
    }
    try {
      await this.prisma.user.delete({
        where: {
          id: id,
        },
      });
      return {
        message: 'Usuario deletado com sucesso',
      };
    }
    catch (error) {
      console.log(error);
      throw new BadRequestException('Erro ao deletar usuario');
    }


  }
}