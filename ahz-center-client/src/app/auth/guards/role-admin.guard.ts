import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

export const adminRoleGuard: CanActivateFn = (route, state) => {
  const _userDataService = inject(UserDataService);
  const _router = inject(Router);
  if (
    _userDataService.controller.user.user_by_role?.find((el) => el.role_id <= 2)
  ) {
    return true;
  } else {
    return _router.navigate([
      `/center/profile/${_userDataService.controller.user.user_id}`,
    ]);
  }
};
