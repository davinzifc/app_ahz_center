import { Module } from '@nestjs/common';
import { Test01AlzhService } from './test_01_alzh.service';
import { Test01AlzhController } from './test_01_alzh.controller';
import { Test01AlzhRepository } from './test_01_alzh.repository';
import { ResponseHandler } from '../../../shared/handlers/response.handler';

@Module({
  controllers: [Test01AlzhController],
  providers: [Test01AlzhService, Test01AlzhRepository, ResponseHandler],
})
export class Test01AlzhModule {}
