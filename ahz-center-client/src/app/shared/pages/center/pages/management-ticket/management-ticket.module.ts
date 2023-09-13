import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementTicketRoutingModule } from './management-ticket-routing.module';
import { ManagementTicketComponent } from './management-ticket.component';
import { ComingSoonModule } from '../../../../components/coming-soon/coming-soon.module';

@NgModule({
  declarations: [ManagementTicketComponent],
  imports: [CommonModule, ManagementTicketRoutingModule, ComingSoonModule],
})
export class ManagementTicketModule {}
