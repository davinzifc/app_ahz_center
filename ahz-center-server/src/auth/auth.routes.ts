import { Routes } from '@nestjs/core';
import { UserModule } from './user/user.module';
import { UserRoleModule } from './user-role/user-role.module';

export const AuthRoutes: Routes = [
  {
    path: 'user',
    module: UserModule,
  },
  {
    path: 'user-role',
    module: UserRoleModule,
  },
];
