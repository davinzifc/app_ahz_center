import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignReportsToUserRoutingModule } from './assign-reports-to-user-routing.module';
import { AssignReportsToUserComponent } from './assign-reports-to-user.component';


@NgModule({
  declarations: [
    AssignReportsToUserComponent
  ],
  imports: [
    CommonModule,
    AssignReportsToUserRoutingModule
  ]
})
export class AssignReportsToUserModule { }
