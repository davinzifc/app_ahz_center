import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementReportsComponent } from './management-reports.component';
import { management_users_reports } from '../../../../../main.routes';
const routes: Routes = [
  {
    path: '',
    component: ManagementReportsComponent,
    children: management_users_reports,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementReportsRoutingModule {}
