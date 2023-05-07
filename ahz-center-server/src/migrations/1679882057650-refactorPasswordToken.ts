import { MigrationInterface, QueryRunner } from "typeorm";

export class refactorPasswordToken1679882057650 implements MigrationInterface {
    name = 'refactorPasswordToken1679882057650'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`restore_password_token\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`restore_password_token\` DROP COLUMN \`created_by\``);
        await queryRunner.query(`ALTER TABLE \`restore_password_token\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`restore_password_token\` DROP COLUMN \`updated_by\``);
        await queryRunner.query(`ALTER TABLE \`restore_password_token\` DROP COLUMN \`is_active\``);
        await queryRunner.query(`ALTER TABLE \`restore_password_token\` ADD \`expiry_date\` date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`restore_password_token\` DROP COLUMN \`expiry_date\``);
        await queryRunner.query(`ALTER TABLE \`restore_password_token\` ADD \`is_active\` tinyint NOT NULL DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE \`restore_password_token\` ADD \`updated_by\` bigint NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`restore_password_token\` ADD \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`restore_password_token\` ADD \`created_by\` bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`restore_password_token\` ADD \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
    }

}
