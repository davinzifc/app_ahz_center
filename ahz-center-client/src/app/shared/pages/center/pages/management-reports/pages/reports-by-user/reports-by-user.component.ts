import { Component, OnInit } from '@angular/core';
import { ConnectionsService } from '../../../../../../../api/connections.service';
import { UserDataService } from '../../../../../../../auth/services/user-data.service';
import { ColumnsUtils } from '../../../../../../../utils/format-columns.utils';
import { Message } from 'primeng/api';

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
  public reportList: any[] = [];
  public selectSubProcess!: any;
  public columnReport!: { attr: string[]; title: string[] };
  public messages: Message[] = [
    {
      severity: 'info',
      summary: 'Info',
      detail: 'For each table, click on the row you want to interact with.',
    },
  ];

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
      this.selectedProcess = null;
      this.reportList = [];
      this.columnReport = { attr: [], title: [] };
      this._connectionsService
        .GET_processSpecific(this.selectedPatient.user_id)
        .subscribe({
          next: (resp: any) => {
            this.processList = resp.response;
          },
        });
    } else {
      this.selectedProcess = null;
      this.reportList = [];
      this.columnReport = { attr: [], title: [] };
    }
  }

  exportXlsx() {
    console.log(this.selectedProcess);
    ColumnsUtils.exportXlsx(
      this.reportList,
      this.selectedProcess.obj_process_type.process_type_name.replace(/ /g, '_')
    );
  }

  getReportProcess() {
    if (this.selectedProcess) {
      this._connectionsService
        .GET_processSpecificReport(
          this.selectedProcess.process_type_id,
          this.selectedPatient.user_id
        )
        .subscribe({
          next: (res: any) => {
            console.log(res);
            this.reportList = res.response;
            const tempKey = Object.keys(
              this.reportList.length ? this.reportList[0] : []
            );
            this.columnReport = ColumnsUtils.format(
              tempKey,
              this.selectedProcess.process_type_id,
              true
            );
          },
        });
    } else {
      this.reportList = [];
      this.columnReport = { attr: [], title: [] };
    }
  }
}
