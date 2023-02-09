import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("pets")
class Pet {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column()
  age: number;

  @Column({ length: 10 })
  species: string;

  @Column({ length: 20 })
  breed: string;

  @Column({ length: 50 })
  tutorName: string;

  @Column({ length: 15 })
  phoneNumber: string;

  @Column({ length: 120 })
  image: string;
}

export { Pet };
