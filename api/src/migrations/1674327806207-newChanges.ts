import { MigrationInterface, QueryRunner } from "typeorm";

export class newChanges1674327806207 implements MigrationInterface {
    name = 'newChanges1674327806207'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pets" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "pets" DROP COLUMN "isActive"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pets" ADD "isActive" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "pets" ADD "deletedAt" TIMESTAMP`);
    }

}
