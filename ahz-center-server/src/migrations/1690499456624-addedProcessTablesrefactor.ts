import { MigrationInterface, QueryRunner } from "typeorm";

export class addedProcessTablesrefactor1690499456624 implements MigrationInterface {
    name = 'addedProcessTablesrefactor1690499456624'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`process_type\` CHANGE \`column_related\` \`table_related\` text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`process_type\` CHANGE \`table_related\` \`column_related\` text NOT NULL`);
    }

}
