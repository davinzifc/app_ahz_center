import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { children_main_routes, main_routes } from '../../../main.routes';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: children_main_routes,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
