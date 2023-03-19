import { MigrationInterface, QueryRunner } from "typeorm";

export class refactorUserTable1679170832098 implements MigrationInterface {
    name = 'refactorUserTable1679170832098'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_ec4e80af79f6f17170f6c30b7a9\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`user_type_id\``);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`created_by\` \`created_by\` bigint NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`updated_by\` \`updated_by\` bigint NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`password\` \`password\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`user_by_role\` CHANGE \`created_by\` \`created_by\` bigint NULL`);
        await queryRunner.query(`ALTER TABLE \`user_by_role\` CHANGE \`updated_by\` \`updated_by\` bigint NULL`);
        await queryRunner.query(`ALTER TABLE \`user_role\` CHANGE \`role_name\` \`role_name\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`action\` CHANGE \`action_name\` \`action_name\` text NULL`);
        await queryRunner.query(`DROP TABLE IF EXISTS \`user_type\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`action\` CHANGE \`action_name\` \`action_name\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user_role\` CHANGE \`role_name\` \`role_name\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user_by_role\` CHANGE \`updated_by\` \`updated_by\` bigint NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user_by_role\` CHANGE \`created_by\` \`created_by\` bigint NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`password\` \`password\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`updated_by\` \`updated_by\` bigint NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`created_by\` \`created_by\` bigint NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`user_type_id\` bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_ec4e80af79f6f17170f6c30b7a9\` FOREIGN KEY (\`user_type_id\`) REFERENCES \`user_type\`(\`user_type_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
