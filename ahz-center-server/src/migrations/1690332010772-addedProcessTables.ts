import { MigrationInterface, QueryRunner } from "typeorm";

export class addedProcessTables1690332010772 implements MigrationInterface {
    name = 'addedProcessTables1690332010772'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`process_type\` (\`process_type_id\` bigint NOT NULL AUTO_INCREMENT, \`process_type_name\` text NOT NULL, \`process_type_description\` text NULL, \`column_related\` text NOT NULL, PRIMARY KEY (\`process_type_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`process_type_user\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL DEFAULT NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL DEFAULT NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`process_type_user_id\` bigint NOT NULL AUTO_INCREMENT, \`process_type_id\` bigint NOT NULL, \`user_id\` bigint NOT NULL, PRIMARY KEY (\`process_type_user_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`ment_alzh\` DROP COLUMN \`edad\``);
        await queryRunner.query(`ALTER TABLE \`ment_alzh\` DROP COLUMN \`sexo\``);
        await queryRunner.query(`ALTER TABLE \`ment_alzh\` ADD \`non_user_ment_alzh_id\` bigint NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_77f366a35a18d18345f7c8af4a\` ON \`role_by_action\` (\`action_id\`, \`role_id\`)`);
        await queryRunner.query(`ALTER TABLE \`ment_alzh\` ADD CONSTRAINT \`FK_6c2aad0dd28e57beb80097d7c35\` FOREIGN KEY (\`non_user_ment_alzh_id\`) REFERENCES \`non_user_ment_alzh\`(\`non_user_ment_alzh_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`process_type_user\` ADD CONSTRAINT \`FK_fff22c5636b86bfa2e38a6b593a\` FOREIGN KEY (\`process_type_id\`) REFERENCES \`process_type\`(\`process_type_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`process_type_user\` ADD CONSTRAINT \`FK_d42629ad65cad8d22843a853fed\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`process_type_user\` DROP FOREIGN KEY \`FK_d42629ad65cad8d22843a853fed\``);
        await queryRunner.query(`ALTER TABLE \`process_type_user\` DROP FOREIGN KEY \`FK_fff22c5636b86bfa2e38a6b593a\``);
        await queryRunner.query(`ALTER TABLE \`ment_alzh\` DROP FOREIGN KEY \`FK_6c2aad0dd28e57beb80097d7c35\``);
        await queryRunner.query(`DROP INDEX \`IDX_77f366a35a18d18345f7c8af4a\` ON \`role_by_action\``);
        await queryRunner.query(`ALTER TABLE \`ment_alzh\` DROP COLUMN \`non_user_ment_alzh_id\``);
        await queryRunner.query(`ALTER TABLE \`ment_alzh\` ADD \`sexo\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`ment_alzh\` ADD \`edad\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`DROP TABLE \`process_type_user\``);
        await queryRunner.query(`DROP TABLE \`process_type\``);
    }

}
