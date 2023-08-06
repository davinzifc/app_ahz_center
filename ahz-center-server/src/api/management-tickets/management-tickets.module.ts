import { Module } from '@nestjs/common';
import { ManagementTicketsService } from './management-tickets.service';
import { ManagementTicketsController } from './management-tickets.controller';

@Module({
  controllers: [ManagementTicketsController],
  providers: [ManagementTicketsService]
})
export class ManagementTicketsModule {}
