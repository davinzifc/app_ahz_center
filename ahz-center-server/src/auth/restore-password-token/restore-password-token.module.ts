import { Module } from '@nestjs/common';
import { RestorePasswordTokenService } from './restore-password-token.service';
import { RestorePasswordTokenController } from './restore-password-token.controller';

@Module({
  controllers: [RestorePasswordTokenController],
  providers: [RestorePasswordTokenService]
})
export class RestorePasswordTokenModule {}
