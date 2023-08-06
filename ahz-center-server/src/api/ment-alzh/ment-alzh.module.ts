import { Module } from '@nestjs/common';
import { MentAlzhService } from './ment-alzh.service';
import { MentAlzhController } from './ment-alzh.controller';
import { ResponseInterceptor } from '../../shared/interceptors/response.interseptor';
import { ResponseHandler } from '../../shared/handlers/response.handler';
import { MentAlzhRepository } from './ment-alzh.repository';

@Module({
  controllers: [MentAlzhController],
  providers: [
    MentAlzhService,
    ResponseInterceptor,
    ResponseHandler,
    MentAlzhRepository,
  ],
})
export class MentAlzhModule {}
