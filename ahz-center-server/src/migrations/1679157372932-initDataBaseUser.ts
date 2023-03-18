import { MigrationInterface, QueryRunner } from "typeorm";

export class initDataBaseUser1679157372932 implements MigrationInterface {
    name = 'initDataBaseUser1679157372932'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user_type\` (\`user_type_id\` bigint NOT NULL AUTO_INCREMENT, \`type_name\` text NULL, PRIMARY KEY (\`user_type_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`user_id\` bigint NOT NULL AUTO_INCREMENT, \`first_name\` text NOT NULL, \`last_name\` text NOT NULL, \`email\` text NOT NULL, \`password\` text NULL, \`user_type_id\` bigint NOT NULL, INDEX \`IDX_758b8ce7c18b9d347461b30228\` (\`user_id\`), PRIMARY KEY (\`user_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`action\` (\`action_id\` bigint NOT NULL AUTO_INCREMENT, \`action_name\` text NULL, PRIMARY KEY (\`action_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role_by_action\` (\`action_id\` bigint NOT NULL, \`role_id\` bigint NOT NULL, PRIMARY KEY (\`action_id\`, \`role_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_role\` (\`user_role_id\` bigint NOT NULL AUTO_INCREMENT, \`role_name\` text NULL, PRIMARY KEY (\`user_role_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_by_role\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`user_id\` bigint NOT NULL, \`role_id\` bigint NOT NULL, INDEX \`IDX_9c4fa227bbc07f95fcfd13c00d\` (\`user_id\`, \`role_id\`), PRIMARY KEY (\`user_id\`, \`role_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_ec4e80af79f6f17170f6c30b7a9\` FOREIGN KEY (\`user_type_id\`) REFERENCES \`user_type\`(\`user_type_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`role_by_action\` ADD CONSTRAINT \`FK_2dcf7112eed0df68f4dae1380d7\` FOREIGN KEY (\`action_id\`) REFERENCES \`action\`(\`action_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`role_by_action\` ADD CONSTRAINT \`FK_c78794f1c4ea9464e50551622ce\` FOREIGN KEY (\`role_id\`) REFERENCES \`user_role\`(\`user_role_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_by_role\` ADD CONSTRAINT \`FK_8812697670e94337ef5f0640733\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_by_role\` ADD CONSTRAINT \`FK_5b2c814a2065f289ce328d8578a\` FOREIGN KEY (\`role_id\`) REFERENCES \`user_role\`(\`user_role_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_by_role\` DROP FOREIGN KEY \`FK_5b2c814a2065f289ce328d8578a\``);
        await queryRunner.query(`ALTER TABLE \`user_by_role\` DROP FOREIGN KEY \`FK_8812697670e94337ef5f0640733\``);
        await queryRunner.query(`ALTER TABLE \`role_by_action\` DROP FOREIGN KEY \`FK_c78794f1c4ea9464e50551622ce\``);
        await queryRunner.query(`ALTER TABLE \`role_by_action\` DROP FOREIGN KEY \`FK_2dcf7112eed0df68f4dae1380d7\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_ec4e80af79f6f17170f6c30b7a9\``);
        await queryRunner.query(`DROP INDEX \`IDX_9c4fa227bbc07f95fcfd13c00d\` ON \`user_by_role\``);
        await queryRunner.query(`DROP TABLE \`user_by_role\``);
        await queryRunner.query(`DROP TABLE \`user_role\``);
        await queryRunner.query(`DROP TABLE \`role_by_action\``);
        await queryRunner.query(`DROP TABLE \`action\``);
        await queryRunner.query(`DROP INDEX \`IDX_758b8ce7c18b9d347461b30228\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`user_type\``);
    }

}
