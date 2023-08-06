import { MigrationInterface, QueryRunner } from "typeorm";

export class createMentAlzhTables1685485984081 implements MigrationInterface {
    name = 'createMentAlzhTables1685485984081'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`ment_alzh\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL DEFAULT NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL DEFAULT NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`ment_alzh_id\` bigint NOT NULL AUTO_INCREMENT, \`user_id\` bigint NOT NULL, \`edad\` int NULL DEFAULT NULL, \`sexo\` text NULL DEFAULT NULL, \`orientacion_1\` int NULL DEFAULT NULL, \`orientacion_1_time\` text NULL DEFAULT NULL, \`orientacion_2\` int NULL DEFAULT NULL, \`orientacion_2_time\` text NULL DEFAULT NULL, \`fijacion\` int NULL DEFAULT NULL, \`fijacion_time\` text NULL DEFAULT NULL, \`lenguaje\` int NULL DEFAULT NULL, \`lenguaje_time\` text NULL DEFAULT NULL, \`calculo\` int NULL DEFAULT NULL, \`calculo_time\` text NULL DEFAULT NULL, \`memoria\` int NULL DEFAULT NULL, \`memoria_time\` text NULL DEFAULT NULL, PRIMARY KEY (\`ment_alzh_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`non_user_ment_alzh\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL DEFAULT NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL DEFAULT NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`non_user_ment_alzh_id\` bigint NOT NULL AUTO_INCREMENT, \`user_name\` text NULL DEFAULT NULL, \`edad\` int NULL DEFAULT NULL, \`sexo\` text NULL DEFAULT NULL, \`orientacion_1\` int NULL DEFAULT NULL, \`orientacion_1_time\` text NULL DEFAULT NULL, \`orientacion_2\` int NULL DEFAULT NULL, \`orientacion_2_time\` text NULL DEFAULT NULL, \`fijacion\` int NULL DEFAULT NULL, \`fijacion_time\` text NULL DEFAULT NULL, \`lenguaje\` int NULL DEFAULT NULL, \`lenguaje_time\` text NULL DEFAULT NULL, \`calculo\` int NULL DEFAULT NULL, \`calculo_time\` text NULL DEFAULT NULL, \`memoria\` int NULL DEFAULT NULL, \`memoria_time\` text NULL DEFAULT NULL, \`is_assigned\` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (\`non_user_ment_alzh_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`ment_alzh\` ADD CONSTRAINT \`FK_44d5d13dca2bcfd5d801be14c9c\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ment_alzh\` DROP FOREIGN KEY \`FK_44d5d13dca2bcfd5d801be14c9c\``);
        await queryRunner.query(`DROP TABLE \`non_user_ment_alzh\``);
        await queryRunner.query(`DROP TABLE \`ment_alzh\``);
    }

}
