import { Route, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { authGuard } from './auth/guards/auth.guard';
import { loginGuard } from './auth/guards/login.guard';
import { adminRoleGuard } from './auth/guards/role-admin.guard';

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

export const legalRoutes: AzhRoutes = {
  name: 'Legal',
  path: 'legal/terms-and-conditions',
  loadChildren: () =>
    import(
      './shared/pages/legal/terms-conditions/terms-conditions.module'
    ).then((c) => c.TermsConditionsModule),
};

export const management_users_reports: AzhRoutes[] = [
  {
    name: 'Reports by user',
    path: 'reports-by-user',
    loadChildren: () =>
      import(
        './shared/pages/center/pages/management-reports/pages/reports-by-user/reports-by-user.module'
      ).then((m) => m.ReportsByUserModule),
  },
  {
    name: 'Assing reports to user',
    path: 'assing-reports',
    loadChildren: () =>
      import(
        './shared/pages/center/pages/management-reports/pages/assign-reports-to-user/assign-reports-to-user.module'
      ).then((m) => m.AssignReportsToUserModule),
  },
  {
    name: '',
    path: '**',
    redirectTo: '/center/management-reports/reports-by-user',
    pathMatch: 'full',
  },
];

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
    name: 'Management reports',
    path: 'management-reports',
    canActivate: [adminRoleGuard],
    loadChildren: () =>
      import(
        './shared/pages/center/pages/management-reports/management-reports.module'
      ).then((m) => m.ManagementReportsModule),
  },
  {
    name: 'Management users',
    path: 'management-users',
    canActivate: [adminRoleGuard],
    loadChildren: () =>
      import(
        './shared/pages/center/pages/management-users/management-users.module'
      ).then((m) => m.ManagementUsersModule),
  },
  {
    name: 'Management tickets',
    path: 'management-tickets',
    loadChildren: () =>
      import(
        './shared/pages/center/pages/management-ticket/management-ticket.module'
      ).then((m) => m.ManagementTicketModule),
  },
  {
    name: 'My reports',
    path: 'my-reports',
    loadChildren: () =>
      import('./shared/pages/center/pages/my-reports/my-reports.module').then(
        (m) => m.MyReportsModule
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
  redirectTo: '/center/main',
  pathMatch: 'full',
};

export const AppRouts: AzhRoutes[] = [
  login_route,
  center_routes,
  default_login_route,
  legalRoutes,
];

export interface AzhRoutes extends Route {
  name: string;
}
