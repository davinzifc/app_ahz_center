import { MigrationInterface, QueryRunner } from "typeorm";

export class nullableTrueMent1691854708281 implements MigrationInterface {
    name = 'nullableTrueMent1691854708281'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ment_alzh\` DROP FOREIGN KEY \`FK_6c2aad0dd28e57beb80097d7c35\``);
        await queryRunner.query(`ALTER TABLE \`ment_alzh\` CHANGE \`non_user_ment_alzh_id\` \`non_user_ment_alzh_id\` bigint NULL`);
        await queryRunner.query(`ALTER TABLE \`ment_alzh\` ADD CONSTRAINT \`FK_6c2aad0dd28e57beb80097d7c35\` FOREIGN KEY (\`non_user_ment_alzh_id\`) REFERENCES \`non_user_ment_alzh\`(\`non_user_ment_alzh_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ment_alzh\` DROP FOREIGN KEY \`FK_6c2aad0dd28e57beb80097d7c35\``);
        await queryRunner.query(`ALTER TABLE \`ment_alzh\` CHANGE \`non_user_ment_alzh_id\` \`non_user_ment_alzh_id\` bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`ment_alzh\` ADD CONSTRAINT \`FK_6c2aad0dd28e57beb80097d7c35\` FOREIGN KEY (\`non_user_ment_alzh_id\`) REFERENCES \`non_user_ment_alzh\`(\`non_user_ment_alzh_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
