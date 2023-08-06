import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CenterComponent } from './center.component';
import { children_center_routes } from '../../../main.routes';

const routes: Routes = [
  {
    path: '',
    component: CenterComponent,
    children: children_center_routes,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CenterRoutingModule {}
