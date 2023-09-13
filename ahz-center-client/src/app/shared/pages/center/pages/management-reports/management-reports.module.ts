import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementReportsRoutingModule } from './management-reports-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { BadgeModule } from 'primeng/badge';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DividerModule } from 'primeng/divider';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputNumberModule } from 'primeng/inputnumber';
import { TabMenuModule } from 'primeng/tabmenu';
import { ManagementReportsComponent } from './management-reports.component';

@NgModule({
  declarations: [ManagementReportsComponent],
  imports: [
    CommonModule,
    ManagementReportsRoutingModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    TagModule,
    BadgeModule,
    ToastModule,
    DropdownModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    DividerModule,
    FormsModule,
    ProgressSpinnerModule,
    TabMenuModule,
  ],
})
export class ManagementReportsModule {}
