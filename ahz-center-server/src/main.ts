import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { dataSource } from './config/orm.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await dataSource
    .initialize()
    .then(() => {
      /** It is executed when the connection to the database is successful. */
      dataSource.query(`SHOW TABLES`).then((data) => {
        data.map(el => {
          console.log( '✨ ',el['Tables_in_ahzdb'])
        })
      });
      console.log(`The connection to the database is successful`);
    })
    .catch((error) => {
      /** It is executed when the connection to the database has an error. */
      console.log(`The connection to the database has an error`);
    });
  await app.listen(3500);
}
bootstrap();
