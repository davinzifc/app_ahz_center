import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertGender1687997856031 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO \`gender\` (name, description) VALUES ('Female', 'The female sex has some distinctive biological characteristics, such as the production of eggs, the development of breasts, the menstrual cycle and the ability to gestate and lactate.'), ('Male', 'The female sex has some distinctive biological characteristics, such as the production of eggs, the development of breasts, the menstrual cycle and the ability to gestate and lactate.')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
