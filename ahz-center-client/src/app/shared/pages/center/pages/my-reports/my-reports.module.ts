import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyReportsRoutingModule } from './my-reports-routing.module';
import { MyReportsComponent } from './my-reports.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MyReportsComponent],
  imports: [CommonModule, MyReportsRoutingModule, TableModule, FormsModule],
})
export class MyReportsModule {}
