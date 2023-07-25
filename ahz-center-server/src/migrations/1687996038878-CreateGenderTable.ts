import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateGenderTable1687996038878 implements MigrationInterface {
    name = 'CreateGenderTable1687996038878'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`gender\` (\`gender_id\` bigint NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, \`description\` text NULL DEFAULT NULL, PRIMARY KEY (\`gender_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`gender\` bigint NULL DEFAULT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`gender\``);
        await queryRunner.query(`DROP TABLE \`gender\``);
    }

}
