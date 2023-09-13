import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyReportsRoutingModule } from './my-reports-routing.module';
import { MyReportsComponent } from './my-reports.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [MyReportsComponent],
  imports: [
    CommonModule,
    MyReportsRoutingModule,
    TableModule,
    FormsModule,
    DividerModule,
    ButtonModule,
    ChartModule,
    MessagesModule,
  ],
})
export class MyReportsModule {}
