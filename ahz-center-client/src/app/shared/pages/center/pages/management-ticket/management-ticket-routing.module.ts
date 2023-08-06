import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementTicketComponent } from './management-ticket.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementTicketComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementTicketRoutingModule {}
