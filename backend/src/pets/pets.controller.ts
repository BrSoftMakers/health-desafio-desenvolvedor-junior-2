import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { BearerId } from 'src/auth/user.decorator';
import { DoarPetDto } from './dto/doar-pet.dto';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) { }
  @UseGuards(AuthGuard)
  @Get('meus-pets')
  meusPets(@BearerId() userId: string) {

    return this.petsService.meusPets(userId);
  }
  @UseGuards(AuthGuard)
  @Post()
  create(@BearerId() id: string, @Body() createPetDto: CreatePetDto) {
    return this.petsService.create(createPetDto, id);
  }

  @Get()
  findAll() {
    return this.petsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petsService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Patch('doar/:id')
  doar(@BearerId() userId: string, @Param('id') id: string, @Body() doarPetDto: DoarPetDto) {

    return this.petsService.doar(userId, id, doarPetDto);
  }




  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(@BearerId() userId: string, @Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {

    return this.petsService.update(id, updatePetDto, userId);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@BearerId() userId: string, @Param('id') id: string) {
    return this.petsService.remove(id, userId);
  }
}
