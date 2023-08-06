import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { ResponseHandler } from '../../shared/handlers/response.handler';
import { UserRoleRepository } from '../user-role/user-role.repository';
import { BcryptPasswordEncoder } from '../../shared/utils/bcrypt.util';
import { UserByRoleRepository } from '../user-by-role/user-by-role.repository';
import { MailerUtil } from '../../shared/utils/mailer.util';
import { RestorePasswordTokenModule } from '../restore-password-token/restore-password-token.module';
import { EmailReaderUtile } from '../../shared/utils/email-reader.util';
import { ResponseInterceptor } from '../../shared/interceptors/response.interseptor';
import { GenderRepository } from './gender.repository';

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
    Number,
    EmailReaderUtile,
    ResponseInterceptor,
    GenderRepository,
  ],
  exports: [UserRepository],
  imports: [RestorePasswordTokenModule],
})
export class UserModule {}
