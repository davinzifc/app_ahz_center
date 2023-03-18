import 'dotenv/config';
import { DataSource } from 'typeorm';
import { env } from 'process';
import { join } from 'path';
import { User } from '../auth/user/entities/user.entity';
import { UserByRole } from '../auth/user-by-role/entities/user-by-role.entity';
import { UserRole } from '../auth/user-role/entities/user-role.entity';
import { UserType } from '../auth/user-type/entities/user-type.entity';
import { Action } from '../auth/actions/entities/action.entity';
import { RoleByAction } from '../auth/role-by-action/entities/role-by-action.entity';

export const dataSource: DataSource = new DataSource({
  type: 'mysql',
  host: env.DB_HOST,
  port: parseInt(env.DB_PORT),
  username: env.DB_USER_NAME,
  password: env.DB_USER_PASS,
  database: env.DB_NAME,
  entities: [
    join(__dirname,'..','auth','**','*.entity.{js,ts}')
  ],
  synchronize: false,
  migrationsRun: false,
  logging: false,
  bigNumberStrings: false,
  migrations: [join(__dirname,'..','migrations','**','*{.ts,.js}')],
  migrationsTableName: 'migrations',
  metadataTableName: 'orm_metadata',
});