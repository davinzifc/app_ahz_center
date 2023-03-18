import { Module } from '@nestjs/common';
import { UserByRoleService } from './user-by-role.service';
import { UserByRoleController } from './user-by-role.controller';

@Module({
  controllers: [UserByRoleController],
  providers: [UserByRoleService]
})
export class UserByRoleModule {}
