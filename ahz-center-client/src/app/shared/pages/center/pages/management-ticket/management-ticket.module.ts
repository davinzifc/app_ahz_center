import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementTicketRoutingModule } from './management-ticket-routing.module';
import { ManagementTicketComponent } from './management-ticket.component';


@NgModule({
  declarations: [
    ManagementTicketComponent
  ],
  imports: [
    CommonModule,
    ManagementTicketRoutingModule
  ]
})
export class ManagementTicketModule { }
