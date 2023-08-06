import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignReportsToUserComponent } from './assign-reports-to-user.component';

const routes: Routes = [
  {
    path: '',
    component: AssignReportsToUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignReportsToUserRoutingModule {}
