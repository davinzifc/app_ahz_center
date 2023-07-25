import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddedFkGenderIntoUser1687997749568 implements MigrationInterface {
  name = 'AddedFkGenderIntoUser1687997749568';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`user\` CHANGE \`gender\` \`gender_id\` bigint NULL DEFAULT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD CONSTRAINT \`FK_6d4390ab1c0e8c86287d9f4c430\` FOREIGN KEY (\`gender_id\`) REFERENCES \`gender\`(\`gender_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_6d4390ab1c0e8c86287d9f4c430\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` CHANGE \`gender_id\` \`gender\` bigint NULL DEFAULT NULL`,
    );
  }
}
