import { Component, OnInit } from '@angular/core';
import { ConnectionsService } from '../../../../../../../api/connections.service';
import { UserDataService } from '../../../../../../../auth/services/user-data.service';

@Component({
  selector: 'app-reports-by-user',
  templateUrl: './reports-by-user.component.html',
  styleUrls: ['./reports-by-user.component.scss'],
})
export class ReportsByUserComponent implements OnInit {
  public patientsList: any[] = [];
  public selectedPatient: any;
  public processList: any[] = [];
  public selectedProcess: any;

  constructor(
    private _connectionsService: ConnectionsService,
    public _userDataService: UserDataService
  ) {}
  ngOnInit(): void {
    this.getPatients();
  }

  getPatients() {
    this._connectionsService.GET_usersRoleId(5).subscribe({
      next: (resp: any) => {
        this.patientsList = resp.response;
      },
    });
  }

  getProcess() {
    if (this.selectedPatient) {
      this._connectionsService
        .GET_processSpecific(this.selectedPatient.user_id)
        .subscribe({
          next: (resp: any) => {
            console.log(resp);
            this.processList = resp.response;
          },
        });
    } else {
      this.selectedProcess = [];
    }
  }
}
