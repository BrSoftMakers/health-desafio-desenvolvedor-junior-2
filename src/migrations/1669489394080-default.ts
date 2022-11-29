import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669489394080 implements MigrationInterface {
    name = 'default1669489394080'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pets" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pets" ALTER COLUMN "created_at" DROP DEFAULT`);
    }

}
