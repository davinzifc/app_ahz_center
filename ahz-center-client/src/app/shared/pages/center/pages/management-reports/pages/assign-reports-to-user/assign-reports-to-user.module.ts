import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignReportsToUserRoutingModule } from './assign-reports-to-user-routing.module';
import { AssignReportsToUserComponent } from './assign-reports-to-user.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
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
import { InputNumberModule } from 'primeng/inputnumber';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  declarations: [AssignReportsToUserComponent],
  imports: [
    CommonModule,
    AssignReportsToUserRoutingModule,
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
export class AssignReportsToUserModule {}
