import { MigrationInterface, QueryRunner } from "typeorm"

export class createFirstUser1679176474243 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT user (user_id, first_name, last_name, email, password) VALUES (1, 'David Felipe', 'Casanas Hernandez', 'd.casanas@ahz.dev.com', '$2a$08$.fZZTkmwKGZiGuO8VpwS6eQF5qeQPq/ufYvkM9IZeO3Xkd4bFQXqy')`);
        await queryRunner.query(`INSERT user_by_role (user_id, role_id) VALUES (1, 1)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
