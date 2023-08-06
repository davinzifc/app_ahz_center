import { Module } from '@nestjs/common';
import { ProcessTypeService } from './process-type.service';
import { ProcessTypeController } from './process-type.controller';
import { ResponseHandler } from '../../shared/handlers/response.handler';
import { ProcessTypeRepository } from './process-type.repository';

@Module({
  controllers: [ProcessTypeController],
  providers: [ProcessTypeService, ResponseHandler, ProcessTypeRepository],
})
export class ProcessTypeModule {}
