import { MigrationInterface, QueryRunner } from "typeorm";

export class createPet1676122122550 implements MigrationInterface {
    name = 'createPet1676122122550'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "age" integer NOT NULL, "species" character varying(10) NOT NULL, "breed" character varying(20) NOT NULL, "tutorName" character varying(50) NOT NULL, "phoneNumber" character varying(15) NOT NULL, "image" character varying(120), CONSTRAINT "PK_d01e9e7b4ada753c826720bee8b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "pets"`);
    }

}
