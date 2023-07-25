import { MigrationInterface, QueryRunner } from "typeorm";

export class RefactorUserData1687913657520 implements MigrationInterface {
    name = 'RefactorUserData1687913657520'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`birthdate\` timestamp NULL DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`identity_card\` bigint NULL DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`phone_number\` bigint NULL DEFAULT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`phone_number\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`identity_card\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`birthdate\``);
    }

}
