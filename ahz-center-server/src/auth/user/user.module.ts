import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { ResponseHandler } from '../../shared/handlers/response.handler';
import { UserRoleRepository } from '../user-role/user-role.repository';
import { BcryptPasswordEncoder } from '../../shared/utils/bcrypt.util';
import { UserByRoleRepository } from '../user-by-role/user-by-role.repository';
import { MailerUtil } from '../../shared/utils/mailer.util';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository,
    ResponseHandler,
    UserRoleRepository,
    BcryptPasswordEncoder,
    UserByRoleRepository,
    MailerUtil,
    Number
  ],
  exports: [UserRepository]
})
export class UserModule {}
