import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { legalRoutes } from '../../../../main.routes';
import { TermsConditionsComponent } from './terms-conditions.component';

const routes: Routes = [
  {
    path: '',
    component: TermsConditionsComponent,
    children: [legalRoutes],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermsConditionsRoutingModule {}
