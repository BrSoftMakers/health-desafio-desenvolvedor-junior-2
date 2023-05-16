import { ENUM, INTEGER, Model, STRING } from 'sequelize';
import sequelize from '../config/init';

export class Pet extends Model {}

export class PetModel {
  id!: number;
  name!: string;
  age!: number;
  race!: string;
  animalType!: 'gato' | 'cachorro';
  ownerName!: string;
  ownerPhone!: string;
}

Pet.init(
  {
    name: STRING(30),
    age: INTEGER(),
    race: STRING(30),
    animalType: ENUM('gato', 'cachorro'),
    ownerName: STRING(50),
    ownerPhone: STRING(50),
  },
  { sequelize, modelName: 'Pet' }
);
