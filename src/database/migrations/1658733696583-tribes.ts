import { MigrationInterface, QueryRunner } from "typeorm";

export class tribes1658733696583 implements MigrationInterface {
    name = 'tribes1658733696583'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SEQUENCE "tribes_id_seq"`);
        await queryRunner.query(`CREATE TABLE "tribes" ("id" INT DEFAULT nextval('"tribes_id_seq"') NOT NULL, "name" varchar(50) NOT NULL, "status" int8 NOT NULL, "organizationIdOrganization" int8, CONSTRAINT "PK_1a548c615b0edfa360875349896" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_244c74351735af7224da3b872d" ON "tribes" ("organizationIdOrganization") `);
        await queryRunner.query(`CREATE SEQUENCE "organizations_id_organization_seq"`);
        await queryRunner.query(`CREATE TABLE "organizations" ("id_organization" INT DEFAULT nextval('"organizations_id_organization_seq"') NOT NULL, "name" varchar(50) NOT NULL, "status" int8 NOT NULL, CONSTRAINT "PK_9794a00513e2df457c2cd808c7f" PRIMARY KEY ("id_organization"))`);
        await queryRunner.query(`ALTER TABLE "tribes" ADD CONSTRAINT "FK_244c74351735af7224da3b872db" FOREIGN KEY ("organizationIdOrganization") REFERENCES "organizations"("id_organization") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tribes" DROP CONSTRAINT "FK_244c74351735af7224da3b872db"`);
        await queryRunner.query(`DROP TABLE "organizations"`);
        await queryRunner.query(`DROP SEQUENCE "organizations_id_organization_seq"`);
        await queryRunner.query(`DROP INDEX "tribes"@"IDX_244c74351735af7224da3b872d" CASCADE`);
        await queryRunner.query(`DROP TABLE "tribes"`);
        await queryRunner.query(`DROP SEQUENCE "tribes_id_seq"`);
    }

}
