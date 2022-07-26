import { MigrationInterface, QueryRunner } from "typeorm";

export class metrics1658740791653 implements MigrationInterface {
    name = 'metrics1658740791653'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "repositories" DROP CONSTRAINT "FK_d80cbbd68d9e9618654b379351f"`);
        await queryRunner.query(`DROP INDEX "repositories"@"IDX_d80cbbd68d9e9618654b379351" CASCADE`);
        await queryRunner.query(`ALTER TABLE "repositories" RENAME COLUMN "tribeId" TO "tribeIdTribe"`);
        await queryRunner.query(`CREATE TABLE "metrics" ("id_repository" int8 NOT NULL, "coverage" float8 NOT NULL, "bugs" int8 NOT NULL, "vulnerabilities" int8 NOT NULL, "hotspot" int8 NOT NULL, "code_smells" int8 NOT NULL, CONSTRAINT "REL_c3d911b1d911a990e617041947" UNIQUE ("id_repository"), CONSTRAINT "PK_c3d911b1d911a990e617041947b" PRIMARY KEY ("id_repository"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c3d911b1d911a990e617041947" ON "metrics" ("id_repository") `);
        await queryRunner.query(`CREATE INDEX "IDX_4858c15c0a70df505a392f5e07" ON "repositories" ("tribeIdTribe") `);
        await queryRunner.query(`ALTER TABLE "repositories" ADD CONSTRAINT "FK_4858c15c0a70df505a392f5e074" FOREIGN KEY ("tribeIdTribe") REFERENCES "tribes"("id_tribe") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "metrics" ADD CONSTRAINT "FK_c3d911b1d911a990e617041947b" FOREIGN KEY ("id_repository") REFERENCES "repositories"("id_repository") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "metrics" DROP CONSTRAINT "FK_c3d911b1d911a990e617041947b"`);
        await queryRunner.query(`ALTER TABLE "repositories" DROP CONSTRAINT "FK_4858c15c0a70df505a392f5e074"`);
        await queryRunner.query(`DROP INDEX "repositories"@"IDX_4858c15c0a70df505a392f5e07" CASCADE`);
        await queryRunner.query(`DROP INDEX "metrics"@"IDX_c3d911b1d911a990e617041947" CASCADE`);
        await queryRunner.query(`DROP TABLE "metrics"`);
        await queryRunner.query(`ALTER TABLE "repositories" RENAME COLUMN "tribeIdTribe" TO "tribeId"`);
        await queryRunner.query(`CREATE INDEX "IDX_d80cbbd68d9e9618654b379351" ON "repositories" ("tribeId") `);
        await queryRunner.query(`ALTER TABLE "repositories" ADD CONSTRAINT "FK_d80cbbd68d9e9618654b379351f" FOREIGN KEY ("tribeId") REFERENCES "tribes"("id_tribe") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
