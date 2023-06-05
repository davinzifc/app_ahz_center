import { Route, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { authGuard } from './auth/guards/auth.guard';
import { MainComponent } from './shared/pages/main/main.component';
import { loginGuard } from './auth/guards/login.guard';

export const login_route: AzhRoutes = {
  name: 'Login',
  path: 'login',
  canActivate: [loginGuard],
  loadChildren: () =>
    import('./auth/pages/login/login.module').then((l) => l.LoginModule),
};

export const main_routes: AzhRoutes = {
  name: 'Main',
  path: 'main',
  canActivateChild: [authGuard],
  loadChildren: () =>
    import('./shared/pages/main/main.module').then((m) => m.MainModule),
};

export const children_main_routes: AzhRoutes[] = [
  {
    name: 'Profile',
    path: 'profile/:id',
    loadChildren: () =>
      import('./shared/pages/main/pages/profile/profile.module').then(
        (p) => p.ProfileModule
      ),
  },
  {
    name: '',
    path: '**',
    redirectTo: '/main',
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
  redirectTo: '/main',
  pathMatch: 'full',
};

export const AppRouts: AzhRoutes[] = [
  login_route,
  main_routes,
  default_login_route,
];

export interface AzhRoutes extends Route {
  name: string;
}
