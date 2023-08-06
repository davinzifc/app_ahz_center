import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementUsersRoutingModule } from './management-users-routing.module';
import { ManagementUsersComponent } from './management-users.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { MessagesModule } from 'primeng/messages';
import { EditUserModalComponent } from './edit-user-modal/edit-user-modal.component';
import { BadgeModule } from 'primeng/badge';
import { EditUserModalModule } from './edit-user-modal/edit-user-modal.module';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CreateUserModalModule } from './create-user-modal/create-user-modal.module';

@NgModule({
  declarations: [ManagementUsersComponent],
  imports: [
    CommonModule,
    TableModule,
    ManagementUsersRoutingModule,
    ButtonModule,
    InputTextModule,
    TagModule,
    DynamicDialogModule,
    MessagesModule,
    BadgeModule,
    EditUserModalModule,
    ToastModule,
    CreateUserModalModule,
  ],
  providers: [DialogService],
})
export class ManagementUsersModule {}
