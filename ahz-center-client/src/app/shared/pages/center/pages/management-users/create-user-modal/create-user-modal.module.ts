import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserModalComponent } from './create-user-modal.component';
import { TableModule } from 'primeng/table';
import { ManagementUsersRoutingModule } from '../management-users-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { MessagesModule } from 'primeng/messages';
import { BadgeModule } from 'primeng/badge';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DividerModule } from 'primeng/divider';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [CreateUserModalComponent],
  imports: [
    CommonModule,
    TableModule,
    ManagementUsersRoutingModule,
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
  ],
  providers: [ConfirmationService],
})
export class CreateUserModalModule {}
