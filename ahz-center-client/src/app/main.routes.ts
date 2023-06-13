import { Route, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { authGuard } from './auth/guards/auth.guard';
import { loginGuard } from './auth/guards/login.guard';

export const login_route: AzhRoutes = {
  name: 'Login',
  path: 'login',
  canActivate: [loginGuard],
  loadChildren: () =>
    import('./auth/pages/login/login.module').then((l) => l.LoginModule),
};

export const center_routes: AzhRoutes = {
  name: 'Center',
  path: 'center',
  canActivateChild: [authGuard],
  loadChildren: () =>
    import('./shared/pages/center/center.module').then((c) => c.CenterModule),
};

export const children_center_routes: AzhRoutes[] = [
  {
    name: 'Profile',
    path: 'profile/:id',
    loadChildren: () =>
      import('./shared/pages/center/pages/profile/profile.module').then(
        (p) => p.ProfileModule
      ),
  },
  {
    name: 'Main',
    path: 'main',
    loadChildren: () =>
      import('./shared/pages/center/pages/main/main.module').then(
        (m) => m.MainModule
      ),
  },
  {
    name: '',
    path: '**',
    redirectTo: '/center/main',
    pathMatch: 'full',
  },
];

const default_login_route: AzhRoutes = {
  name: 'Login',
  path: '',
  redirectTo: '/login',
  pathMatch: 'full',
};

const default_main_route: AzhRoutes = {
  name: '',
  path: '**',
  redirectTo: '/center/main/profile/12',
  pathMatch: 'full',
};

export const AppRouts: AzhRoutes[] = [
  login_route,
  center_routes,
  default_login_route,
];

export interface AzhRoutes extends Route {
  name: string;
}
