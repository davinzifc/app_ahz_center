import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSource } from './config/orm.config';
import { AuthModule } from './auth/auth.module';
import { APP_FILTER, RouterModule, Reflector } from '@nestjs/core';
import { MainRoutes } from './main.routes';
import { ErrorHandler } from './shared/handlers/error.handler';
import { JwtMiddleware } from './shared/middleware/jwr.middleware';
import { JwtService } from '@nestjs/jwt';
import { ResponseHandler } from './shared/handlers/response.handler';
import { MailerModule } from '@nestjs-modules/mailer';
import { env } from 'process';
import { NonUserMentAlzhModule } from './api/non-user-ment-alzh/non-user-ment-alzh.module';
import { MentAlzhModule } from './api/ment-alzh/ment-alzh.module';
import { ProcessTypeUserModule } from './api/process-type-user/process-type-user.module';
import { ProcessTypeModule } from './api/process-type/process-type.module';
import { ManagementTicketsModule } from './api/management-tickets/management-tickets.module';
import { Test01AlzhModule } from './api/tests/test_01_alzh/test_01_alzh.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dataSource.options,
      keepConnectionAlive: true,
      autoLoadEntities: true,
    }),
    MailerModule.forRoot({
      transport: {
        service: 'gmail',
        auth: {
          user: env.MAIL_USER,
          pass: env.MAIL_PASS,
        },
      },
      defaults: {
        from: env.MAIL_USER,
      },
    }),
    RouterModule.register(MainRoutes),
    AuthModule,
    Reflector,
    NonUserMentAlzhModule,
    MentAlzhModule,
    ProcessTypeUserModule,
    ProcessTypeModule,
    ManagementTicketsModule,
    Test01AlzhModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    JwtService,
    JwtMiddleware,
    ResponseHandler,
    {
      provide: APP_FILTER,
      useClass: ErrorHandler,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleware).forRoutes(
      {
        path: 'auth/user/',
        method: RequestMethod.ALL,
      },
      {
        path: 'auth/user/*',
        method: RequestMethod.ALL,
      },
      {
        path: 'api/*',
        method: RequestMethod.ALL,
      },
    );
  }
}
