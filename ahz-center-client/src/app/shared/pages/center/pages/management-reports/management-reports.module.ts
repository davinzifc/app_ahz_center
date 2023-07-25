import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementReportsRoutingModule } from './management-reports-routing.module';
import { ManagementReportsComponent } from './management-reports.component';


@NgModule({
  declarations: [
    ManagementReportsComponent
  ],
  imports: [
    CommonModule,
    ManagementReportsRoutingModule
  ]
})
export class ManagementReportsModule { }
