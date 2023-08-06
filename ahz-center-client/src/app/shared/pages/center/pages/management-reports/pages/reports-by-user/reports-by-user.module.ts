import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsByUserRoutingModule } from './reports-by-user-routing.module';
import { ReportsByUserComponent } from './reports-by-user.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { TagModule } from 'primeng/tag';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { MessagesModule } from 'primeng/messages';
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
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  declarations: [ReportsByUserComponent],
  imports: [
    CommonModule,
    ReportsByUserRoutingModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    TagModule,
    DynamicDialogModule,
    MessagesModule,
    BadgeModule,
    ToastModule,
    MessagesModule,
    DropdownModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    DividerModule,
    FormsModule,
    CalendarModule,
    PasswordModule,
    ProgressSpinnerModule,
    TabMenuModule,
  ],
})
export class ReportsByUserModule {}
