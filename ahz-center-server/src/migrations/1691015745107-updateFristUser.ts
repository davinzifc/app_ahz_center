import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateFristUser1691015745107 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE \`user\` SET email = 'd.casanas@alzhcenter.com', gender_id = 2, identity_card = 1151961757, birthdate = '1997-05-04 00:00:00', phone_number = 3226894494 WHERE user_id = 1;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
