import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
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

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
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
  ],
})
export class ProfileModule {}
