import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('pets')
export class Pet {
@PrimaryGeneratedColumn()
  id: number;

@Column({type: 'text'})
  name: string;

@Column({type: 'text'})
  age: string;

@Column({type: 'text'})
  catOrDog: string;

@Column({type: 'text'})
  breed: string;

@Column({type: 'text'})
  owner: string;

@Column({type: 'text'})
  ownerContact: string;
}
