import { Module } from '@nestjs/common';
import { RestorePasswordTokenService } from './restore-password-token.service';
import { RestorePasswordTokenController } from './restore-password-token.controller';
import { RestorePasswordTokenRepository } from './restore-password-token.repository';
import { ResponseHandler } from '../../shared/handlers/response.handler';

@Module({
  controllers: [RestorePasswordTokenController],
  providers: [RestorePasswordTokenService, RestorePasswordTokenRepository, ResponseHandler],
  exports: [RestorePasswordTokenService, RestorePasswordTokenRepository]
})
export class RestorePasswordTokenModule {}
