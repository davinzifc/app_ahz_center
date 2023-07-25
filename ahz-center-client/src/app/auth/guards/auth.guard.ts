import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

export const authGuard: CanActivateFn = (route, state) => {
  const _userDataService = inject(UserDataService);
  const _router = inject(Router);
  if (_userDataService.activeUser()) {
    return true;
  } else {
    return _router.navigate(['/login']);
  }
};
