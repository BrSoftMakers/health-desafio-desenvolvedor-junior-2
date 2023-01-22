import { MigrationInterface, QueryRunner } from "typeorm";

export class changesTables1674311127925 implements MigrationInterface {
    name = 'changesTables1674311127925'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pet_owner" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "pets" DROP CONSTRAINT "FK_275e1bb3fdeea68f8356d8e1ebb"`);
        await queryRunner.query(`ALTER TABLE "pets" ADD CONSTRAINT "UQ_275e1bb3fdeea68f8356d8e1ebb" UNIQUE ("ownerId")`);
        await queryRunner.query(`ALTER TABLE "pets" ADD CONSTRAINT "FK_275e1bb3fdeea68f8356d8e1ebb" FOREIGN KEY ("ownerId") REFERENCES "pet_owner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pets" DROP CONSTRAINT "FK_275e1bb3fdeea68f8356d8e1ebb"`);
        await queryRunner.query(`ALTER TABLE "pets" DROP CONSTRAINT "UQ_275e1bb3fdeea68f8356d8e1ebb"`);
        await queryRunner.query(`ALTER TABLE "pets" ADD CONSTRAINT "FK_275e1bb3fdeea68f8356d8e1ebb" FOREIGN KEY ("ownerId") REFERENCES "pet_owner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pet_owner" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
