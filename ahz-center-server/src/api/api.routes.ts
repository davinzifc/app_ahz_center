import { Routes } from '@nestjs/core';
import { NonUserMentAlzhModule } from './non-user-ment-alzh/non-user-ment-alzh.module';
import { MentAlzhModule } from './ment-alzh/ment-alzh.module';
import { ProcessTypeModule } from './process-type/process-type.module';
import { ProcessTypeUserModule } from './process-type-user/process-type-user.module';
import { ManagementTicketsModule } from './management-tickets/management-tickets.module';

export const ApiRoutes: Routes = [
  {
    path: 'non-user-ment-alzh',
    module: NonUserMentAlzhModule,
  },
  {
    path: 'ment-alzh',
    module: MentAlzhModule,
  },
  {
    path: 'process-type',
    module: ProcessTypeModule,
  },
  {
    path: 'process-type-user',
    module: ProcessTypeUserModule,
  },
  {
    path: 'management-tickets',
    module: ManagementTicketsModule,
  },
];
