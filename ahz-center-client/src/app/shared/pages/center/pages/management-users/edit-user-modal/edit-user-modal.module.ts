import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserModalComponent } from './edit-user-modal.component';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [EditUserModalComponent],
  imports: [
    CommonModule,
    TagModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    ButtonModule,
    FormsModule,
    InputNumberModule,
    CalendarModule,
    InputMaskModule,
    ToastModule,
    MessagesModule,
    DropdownModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    DividerModule,
  ],
  providers: [ConfirmationService],
})
export class EditUserModalModule {}
