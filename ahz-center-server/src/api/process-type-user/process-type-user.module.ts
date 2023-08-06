import { Module } from '@nestjs/common';
import { ProcessTypeUserService } from './process-type-user.service';
import { ProcessTypeUserController } from './process-type-user.controller';
import { ResponseHandler } from '../../shared/handlers/response.handler';
import { ProcessTypeUserRepository } from './process-type-user.repository';
import { ProcessTypeRepository } from '../process-type/process-type.repository';
import { UserByRoleRepository } from '../../auth/user-by-role/user-by-role.repository';

@Module({
  controllers: [ProcessTypeUserController],
  providers: [
    ProcessTypeUserService,
    ResponseHandler,
    ProcessTypeUserRepository,
    ProcessTypeRepository,
    UserByRoleRepository,
  ],
})
export class ProcessTypeUserModule {}
