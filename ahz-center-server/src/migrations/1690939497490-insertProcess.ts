import { MigrationInterface, QueryRunner } from 'typeorm';

export class insertProcess1690939497490 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `insert into process_type (process_type_name, process_type_description, table_related) values ('Ment ALHZ', 'Pending', 'ment_alzh')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
