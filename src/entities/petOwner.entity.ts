import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Pet } from './pet.entity';

@Entity('pet_owner')
class Owner {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  phone_number: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Pet, (pet) => pet.owner)
  pets: Pet[];
}

export { Owner };
