import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const _userDataService = inject(UserDataService);
  const _router = inject(Router);
  console.log(_userDataService.activeUser());
  if (_userDataService.activeUser()) {
    return _router.navigate(['/main/profile/12']);
  } else {
    return true;
  }
};
