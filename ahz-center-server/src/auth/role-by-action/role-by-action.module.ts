import { Module } from '@nestjs/common';
import { RoleByActionService } from './role-by-action.service';
import { RoleByActionController } from './role-by-action.controller';

@Module({
  controllers: [RoleByActionController],
  providers: [RoleByActionService]
})
export class RoleByActionModule {}
