import { MigrationInterface, QueryRunner } from "typeorm";

export class createManagementTicket1690645258021 implements MigrationInterface {
    name = 'createManagementTicket1690645258021'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`management_ticket\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL DEFAULT NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL DEFAULT NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`management_ticket_id\` bigint NOT NULL, \`patient_id\` bigint NOT NULL, \`doctor_id\` bigint NOT NULL, PRIMARY KEY (\`management_ticket_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`management_ticket\` ADD CONSTRAINT \`FK_f964fef1cce683a00dd62594ebb\` FOREIGN KEY (\`patient_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`management_ticket\` ADD CONSTRAINT \`FK_0146742020edf16b89e775ba303\` FOREIGN KEY (\`doctor_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`management_ticket\` DROP FOREIGN KEY \`FK_0146742020edf16b89e775ba303\``);
        await queryRunner.query(`ALTER TABLE \`management_ticket\` DROP FOREIGN KEY \`FK_f964fef1cce683a00dd62594ebb\``);
        await queryRunner.query(`DROP TABLE \`management_ticket\``);
    }

}
