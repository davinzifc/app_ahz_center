import { MigrationInterface, QueryRunner } from "typeorm"

export class insertUserRole1679165108381 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT user_role (role_name) VALUES ('Sup Admin'), ('Admin'), ('Application'), ('Guest')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
