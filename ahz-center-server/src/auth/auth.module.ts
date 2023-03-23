import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from './user/user.module';
import { UserRoleModule } from './user-role/user-role.module';
import { ActionsModule } from './actions/actions.module';
import { RoleByActionModule } from './role-by-action/role-by-action.module';
import { UserByRoleModule } from './user-by-role/user-by-role.module';
import { RouterModule } from '@nestjs/core';
import { AuthRoutes } from './auth.routes';
import { ResponseHandler } from '../shared/handlers/response.handler';
import { BcryptPasswordEncoder } from '../shared/utils/bcrypt.util';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { RestorePasswordTokenModule } from './restore-password-token/restore-password-token.module';

@Module({
  controllers: [AuthController],
  imports: [
    UserModule,
    UserRoleModule,
    ActionsModule,
    RoleByActionModule,
    UserByRoleModule,
    RestorePasswordTokenModule
  ],
  providers: [
    AuthService,
    ResponseHandler,
    BcryptPasswordEncoder,
    JwtService
  ],
  exports: [
    AuthService,
  ]
})
export class AuthModule {}
