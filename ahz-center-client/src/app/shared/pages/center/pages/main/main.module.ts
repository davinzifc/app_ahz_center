import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ComingSoonModule } from '../../../../components/coming-soon/coming-soon.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, ComingSoonModule],
})
export class MainModule {}
