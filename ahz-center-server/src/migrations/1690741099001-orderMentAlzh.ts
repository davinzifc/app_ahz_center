import { MigrationInterface, QueryRunner } from 'typeorm';

export class orderMentAlzh1690741099001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ment_alzh CHANGE created_by created_by bigint(20) DEFAULT NULL NULL AFTER non_user_ment_alzh_id;`,
    );
    await queryRunner.query(
      `ALTER TABLE ment_alzh CHANGE created_at created_at timestamp(6) DEFAULT current_timestamp(6) NOT NULL AFTER created_by;`,
    );
    await queryRunner.query(
      `ALTER TABLE ment_alzh CHANGE updated_at updated_at timestamp(6) DEFAULT current_timestamp(6) on update current_timestamp(6) NULL AFTER created_at;`,
    );
    await queryRunner.query(
      `ALTER TABLE ment_alzh CHANGE updated_by updated_by bigint(20) DEFAULT NULL NULL AFTER updated_at;`,
    );
    await queryRunner.query(
      `ALTER TABLE ment_alzh CHANGE is_active is_active tinyint(4) DEFAULT 1 NOT NULL AFTER updated_by;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
