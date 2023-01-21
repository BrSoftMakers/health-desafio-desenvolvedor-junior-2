import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pet_owner')
class Owner {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  phone_number: string;
}

export { Owner };
