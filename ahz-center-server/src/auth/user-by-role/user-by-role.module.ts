import { Module } from '@nestjs/common';
import { UserByRoleService } from './user-by-role.service';
import { UserByRoleController } from './user-by-role.controller';
import { ResponseHandler } from '../../shared/handlers/response.handler';
import { UserByRoleRepository } from './user-by-role.repository';

@Module({
  controllers: [UserByRoleController],
  providers: [UserByRoleService, ResponseHandler, UserByRoleRepository],
  exports: [UserByRoleRepository]
})
export class UserByRoleModule {}
