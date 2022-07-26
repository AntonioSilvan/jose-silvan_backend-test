import { MigrationInterface, QueryRunner } from "typeorm";

export class tribes1658736321449 implements MigrationInterface {
    name = 'tribes1658736321449'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tribes" RENAME COLUMN "id" TO "id_tribe"`);
        await queryRunner.query(`ALTER TABLE "tribes" RENAME CONSTRAINT "PK_1a548c615b0edfa360875349896" TO "PK_4be16bcfe80b17e04e5e805aa87"`);
        await queryRunner.query(`CREATE SEQUENCE "repositories_id_repository_seq"`);
        await queryRunner.query(`CREATE TABLE "repositories" ("id_repository" INT DEFAULT nextval('"repositories_id_repository_seq"') NOT NULL, "name" varchar(50) NOT NULL, "state" char(1) NOT NULL, "create_time" timestamptz NOT NULL DEFAULT now(), "status" char(1) NOT NULL, "tribeId" int8, CONSTRAINT "PK_8095744125151a8de6f95ce504c" PRIMARY KEY ("id_repository"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d80cbbd68d9e9618654b379351" ON "repositories" ("tribeId") `);
        await queryRunner.query(`ALTER TABLE "repositories" ADD CONSTRAINT "FK_d80cbbd68d9e9618654b379351f" FOREIGN KEY ("tribeId") REFERENCES "tribes"("id_tribe") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "repositories" DROP CONSTRAINT "FK_d80cbbd68d9e9618654b379351f"`);
        await queryRunner.query(`DROP INDEX "repositories"@"IDX_d80cbbd68d9e9618654b379351" CASCADE`);
        await queryRunner.query(`DROP TABLE "repositories"`);
        await queryRunner.query(`DROP SEQUENCE "repositories_id_repository_seq"`);
        await queryRunner.query(`ALTER TABLE "tribes" RENAME CONSTRAINT "PK_4be16bcfe80b17e04e5e805aa87" TO "PK_1a548c615b0edfa360875349896"`);
        await queryRunner.query(`ALTER TABLE "tribes" RENAME COLUMN "id_tribe" TO "id"`);
    }

}
