import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1674234854726 implements MigrationInterface {
    name = 'createTables1674234854726'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "age" integer NOT NULL, "type" character varying NOT NULL, "breed" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "ownerId" uuid, CONSTRAINT "PK_d01e9e7b4ada753c826720bee8b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pet_owner" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "phone_number" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5116a00f46dd9097ed6bd8dd6a5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "pets" ADD CONSTRAINT "FK_275e1bb3fdeea68f8356d8e1ebb" FOREIGN KEY ("ownerId") REFERENCES "pet_owner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pets" DROP CONSTRAINT "FK_275e1bb3fdeea68f8356d8e1ebb"`);
        await queryRunner.query(`DROP TABLE "pet_owner"`);
        await queryRunner.query(`DROP TABLE "pets"`);
    }

}
