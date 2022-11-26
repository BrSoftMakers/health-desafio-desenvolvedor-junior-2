import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669485129131 implements MigrationInterface {
    name = 'default1669485129131'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pets" ("id" text NOT NULL, "name" text NOT NULL, "age" numeric NOT NULL, "tipo" text NOT NULL, "raca" text NOT NULL, "imagem" text NOT NULL, "owner" text NOT NULL, "phone" text NOT NULL, "created_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_d01e9e7b4ada753c826720bee8b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "pets"`);
    }

}
