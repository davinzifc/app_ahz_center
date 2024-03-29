import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementUsersComponent } from './management-users.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementUsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementUsersRoutingModule {}
