import { Module } from '@nestjs/common';
import { ProcessTypeUserService } from './process-type-user.service';
import { ProcessTypeUserController } from './process-type-user.controller';
import { ResponseHandler } from '../../shared/handlers/response.handler';
import { ProcessTypeUserRepository } from './process-type-user.repository';
import { ProcessTypeRepository } from '../process-type/process-type.repository';
import { UserByRoleRepository } from '../../auth/user-by-role/user-by-role.repository';
import { Test01AlzhRepository } from '../tests/test_01_alzh/test_01_alzh.repository';
import { NonUserMentAlzhRepository } from '../non-user-ment-alzh/non-user-ment-alzh.repository';

@Module({
  controllers: [ProcessTypeUserController],
  providers: [
    ProcessTypeUserService,
    ResponseHandler,
    ProcessTypeUserRepository,
    ProcessTypeRepository,
    UserByRoleRepository,
    Test01AlzhRepository,
    NonUserMentAlzhRepository,
  ],
})
export class ProcessTypeUserModule {}
