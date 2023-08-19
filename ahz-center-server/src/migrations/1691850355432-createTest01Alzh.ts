import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTest01Alzh1691850355432 implements MigrationInterface {
  name = 'createTest01Alzh1691850355432';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`test_01_alzh\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`test_01_alzh_id\` bigint NOT NULL AUTO_INCREMENT, \`test_value\` int NOT NULL, \`test_time\` timestamp NOT NULL, \`uuid_test_code\` text NOT NULL, \`user_id\` bigint NULL, PRIMARY KEY (\`test_01_alzh_id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`test_01_alzh\``);
  }
}
