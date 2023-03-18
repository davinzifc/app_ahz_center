import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './auth/user/user.module';
import { UserTypeModule } from './auth/user-type/user-type.module';
import { UserRoleModule } from './auth/user-role/user-role.module';
import { ActionsModule } from './auth/actions/actions.module';
import { RoleByActionModule } from './auth/role-by-action/role-by-action.module';
import { UserByRoleModule } from './auth/user-by-role/user-by-role.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSource } from './config/orm.config';

@Module({
  imports: [
    UserModule,
    UserTypeModule,
    UserRoleModule,
    ActionsModule,
    RoleByActionModule,
    UserByRoleModule,
    TypeOrmModule.forRoot({
      ...dataSource.options,
      keepConnectionAlive: true,
      autoLoadEntities: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
