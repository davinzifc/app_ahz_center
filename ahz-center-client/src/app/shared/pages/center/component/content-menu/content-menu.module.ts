import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentMenuComponent } from './content-menu.component';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';
import { BtnHomeModule } from '../btn-home/btn-home.module';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ContentMenuComponent],
  imports: [
    CommonModule,
    CardModule,
    RouterModule,
    BtnHomeModule,
    RippleModule,
    ButtonModule,
  ],
  exports: [ContentMenuComponent],
})
export class ContentMenuModule {}
