import { MigrationInterface, QueryRunner } from "typeorm";

export class addIsActive1674267715350 implements MigrationInterface {
    name = 'addIsActive1674267715350'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pets" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pets" DROP COLUMN "isActive"`);
    }

}
