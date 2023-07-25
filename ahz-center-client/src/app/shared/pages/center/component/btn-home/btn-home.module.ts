import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnHomeComponent } from './btn-home.component';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BtnHomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    RippleModule,
    CardModule,
    AvatarModule,
    TagModule,
  ],
  exports: [BtnHomeComponent],
})
export class BtnHomeModule {}
