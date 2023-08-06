import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouts } from './main.routes';

@NgModule({
  imports: [RouterModule.forRoot(AppRouts)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
