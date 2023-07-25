import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CenterRoutingModule } from './center-routing.module';
import { CenterComponent } from './center.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AvatarModule } from 'primeng/avatar';
import { FocusTrapModule } from 'primeng/focustrap';
import { RippleModule } from 'primeng/ripple';
import { BtnHomeModule } from './component/btn-home/btn-home.module';
import { CardModule } from 'primeng/card';
import { ContentMenuModule } from './component/content-menu/content-menu.module';

@NgModule({
  declarations: [CenterComponent],
  imports: [
    CommonModule,
    CenterRoutingModule,
    PanelMenuModule,
    AvatarModule,
    FocusTrapModule,
    RippleModule,
    BtnHomeModule,
    CardModule,
    ContentMenuModule,
  ],
})
export class CenterModule {}
