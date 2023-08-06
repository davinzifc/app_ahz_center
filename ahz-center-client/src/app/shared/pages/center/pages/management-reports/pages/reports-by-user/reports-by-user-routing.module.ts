import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsByUserComponent } from './reports-by-user.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsByUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsByUserRoutingModule {}
