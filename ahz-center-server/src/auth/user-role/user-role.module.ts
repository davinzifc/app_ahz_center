import { Module } from '@nestjs/common';
import { UserRoleService } from './user-role.service';
import { UserRoleController } from './user-role.controller';
import { UserRoleRepository } from './user-role.repository';
import { ResponseHandler } from '../../shared/handlers/response.handler';

@Module({
  controllers: [UserRoleController],
  providers: [UserRoleService, UserRoleRepository, ResponseHandler],
  exports: [UserRoleRepository]
})
export class UserRoleModule {}
