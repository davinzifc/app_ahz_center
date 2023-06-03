import { Routes } from '@nestjs/core';
import { NonUserMentAlzhModule } from './non-user-ment-alzh/non-user-ment-alzh.module';
import { MentAlzhModule } from './ment-alzh/ment-alzh.module';

export const ApiRoutes: Routes = [
  {
    path: 'non-user-ment-alzh',
    module: NonUserMentAlzhModule,
  },
  {
    path: 'ment-alzh',
    module: MentAlzhModule,
  },
];
