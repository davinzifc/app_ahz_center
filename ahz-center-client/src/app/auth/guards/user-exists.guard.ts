import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

export const isActiveUser: CanActivateFn = (route, state) => {
  const _userDataService = inject(UserDataService);
  return !!_userDataService?.controller?.user?.user_id;
};
