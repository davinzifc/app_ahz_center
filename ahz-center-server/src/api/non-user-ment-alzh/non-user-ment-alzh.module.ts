import { Module } from '@nestjs/common';
import { NonUserMentAlzhService } from './non-user-ment-alzh.service';
import { NonUserMentAlzhController } from './non-user-ment-alzh.controller';
import { ResponseInterceptor } from '../../shared/interceptors/response.interseptor';
import { ResponseHandler } from '../../shared/handlers/response.handler';
import { NonUserMentAlzhRepository } from './non-user-ment-alzh.repository';
import { UserRepository } from '../../auth/user/user.repository';
import { UserByRoleRepository } from '../../auth/user-by-role/user-by-role.repository';
import { MentAlzhRepository } from '../ment-alzh/ment-alzh.repository';

@Module({
  controllers: [NonUserMentAlzhController],
  providers: [
    NonUserMentAlzhService,
    ResponseInterceptor,
    ResponseHandler,
    NonUserMentAlzhRepository,
    UserRepository,
    UserByRoleRepository,
    MentAlzhRepository,
  ],
})
export class NonUserMentAlzhModule {}
