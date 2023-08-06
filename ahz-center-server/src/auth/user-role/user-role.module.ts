import { Module } from '@nestjs/common';
import { UserRoleService } from './user-role.service';
import { UserRoleController } from './user-role.controller';
import { UserRoleRepository } from './user-role.repository';
import { ResponseHandler } from '../../shared/handlers/response.handler';
import { UserByRoleRepository } from '../user-by-role/user-by-role.repository';

@Module({
  controllers: [UserRoleController],
  providers: [
    UserRoleService,
    UserRoleRepository,
    UserByRoleRepository,
    ResponseHandler,
  ],
  exports: [UserRoleRepository],
})
export class UserRoleModule {}
