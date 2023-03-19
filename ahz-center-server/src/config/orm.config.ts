import 'dotenv/config';
import { DataSource } from 'typeorm';
import { env } from 'process';
import { join } from 'path';

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