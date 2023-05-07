import { MigrationInterface, QueryRunner } from "typeorm";

export class refactorUser1679961976877 implements MigrationInterface {
    name = 'refactorUser1679961976877'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`is_application\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`last_name\` \`last_name\` text NULL DEFAULT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`last_name\` \`last_name\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`is_application\``);
    }

}
