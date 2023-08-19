import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../../../../../../auth/services/user-data.service';
import { ConnectionsService } from '../../../../../../../api/connections.service';
import { ColumnsUtils } from '../../../../../../../utils/format-columns.utils';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LinkDataService } from '../../../../../../../utils/util-service/link-data.service';

@Component({
  selector: 'app-assign-reports-to-user',
  templateUrl: './assign-reports-to-user.component.html',
  styleUrls: ['./assign-reports-to-user.component.scss'],
})
export class AssignReportsToUserComponent implements OnInit {
  public patientsList: any[] = [];
  public selectedPatient: any;
  public processList: any[] = [];
  public selectedProcess: any;
  public reportList: any[] = [];
  public selectSubProcess!: any;
  public is_in_process!: boolean | null;
  public columnReport!: { attr: string[]; title: string[] };

  constructor(
    private _connectionsService: ConnectionsService,
    public _userDataService: UserDataService,
    public messageService: MessageService,
    private _linkDataService: LinkDataService
  ) {}

  ngOnInit(): void {
    this.getPatients();
  }

  getProcess() {
    if (this.selectedPatient) {
      this.columnReport = { attr: [], title: [] };
      this.selectedProcess = null;
      this.reportList = [];
      this._connectionsService
        .GET_findInProcessDataByUser(this.selectedPatient.user_id)
        .subscribe({
          next: (resp: any) => {
            console.log(resp);
            this.processList = resp.response;
          },
        });
    } else {
      this.selectedProcess = null;
      this.columnReport = { attr: [], title: [] };
      this.reportList = [];
      this.is_in_process = null;
    }
  }

  linkData(data: any) {
    this._linkDataService
      .saveDataLink(
        this._linkDataService.getIdDataLink(
          data,
          this.selectedProcess.process_type_id
        ),
        this.selectedPatient.user_id,
        this.selectedProcess.process_type_id
      )
      .subscribe({
        next: (resp: any) => {
          if (!resp.error) {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: `the information was registered to the user ${this.selectedPatient.user_id}`,
            });
            this.findRecordsPendingToAssign();
          }
        },
        error: (err: any) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: `the information was not registered to the user ${this.selectedPatient.user_id}`,
          });
        },
      });
  }

  findRecordsPendingToAssign() {
    if (this.selectedProcess && this.selectedProcess?.in_progress) {
      this.is_in_process = true;
      this._connectionsService
        .GET_findRecordsPendingByUserAssignment(
          this.selectedProcess.process_type_id
        )
        .subscribe({
          next: (resp: any) => {
            this.reportList = resp.response;
            const tempKey = Object.keys(
              this.reportList.length ? this.reportList[0] : []
            );
            this.columnReport = ColumnsUtils.format(
              tempKey,
              this.selectedProcess.process_type_id,
              false
            );
          },
        });
    } else {
      this.columnReport = { attr: [], title: [] };
      this.reportList = [];
      this.is_in_process = this.selectedProcess ? false : null;
    }
  }

  exportXlsx() {
    ColumnsUtils.exportXlsx(
      this.reportList,
      this.selectedProcess.process_type_name.replace(/ /g, '_')
    );
  }

  createProcessByUser(process: any) {
    if (process && this.selectedPatient) {
      this._connectionsService
        .POST_createProcessByUser({
          user_id: this.selectedPatient.user_id,
          process_type_id: process.process_type_id,
        })
        .subscribe({
          next: (resp: any) => {
            this.getProcess();
          },
        });
    }
  }

  getPatients() {
    this._connectionsService.GET_usersRoleId(5).subscribe({
      next: (resp: any) => {
        this.patientsList = resp.response;
      },
    });
  }
}
