import { Component, OnInit } from '@angular/core';
import { ManagementUserService } from '../../../../../../auth/services/management-user.service';
import { ConnectionsService } from '../../../../../../api/connections.service';
import { User } from '../../../../../../auth/interface/user.dto';
import { UserDataService } from '../../../../../../auth/services/user-data.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.scss'],
})
export class EditUserModalComponent implements OnInit {
  public editableUser: any = new User();
  public gendersList: any[] = [];
  public is_admin: boolean = false;
  private integrity: string = '';

  constructor(
    public _userDataService: UserDataService,
    private _managementUserService: ManagementUserService,
    private _connectionsService: ConnectionsService,
    private _ref: DynamicDialogRef,
    public messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.getUserById(this._managementUserService.editableUser.user_id);
    this.getGenders();
    this.is_admin = !!this._userDataService.controller.user.user_by_role.find(
      (el) => el.role_id <= 2
    );
  }

  closeModal(cancel: boolean) {
    if (!cancel) {
      console.log(this.editableUser.user_id);
      this._connectionsService
        .PATCH_updateUser(this.editableUser.user_id, this.editableUser)
        .subscribe({
          next: (res: any) => {
            this._managementUserService.getUsers();
            this._ref.close({
              severity: 'success',
              summary: 'Success',
              detail: 'The user has been updated correctly.',
            });
          },
          error: (err: any) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'The user has not been updated correctly.',
            });
          },
        });
    } else {
      if (this.integrity === btoa(JSON.stringify(this.editableUser))) {
        this._ref.close(null);
      } else {
        this.showSticky();
      }
    }
  }

  showSticky() {
    this.confirmationService.confirm({
      message: 'There are pending changes, do you want to discard them?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this._ref.close({
          severity: 'warn',
          summary: 'Warn',
          detail: 'Changes have been discarded',
        });
      },
      reject: (type: ConfirmEventType) => {},
    });
  }

  getUserById(user_id: number) {
    this._connectionsService.GET_userById(user_id).subscribe({
      next: (res: any) => {
        res.response.birthdate = new Date(res.response.birthdate);
        this.editableUser = res.response;
        this.integrity = btoa(JSON.stringify(this.editableUser));
      },
    });
  }

  getGenders() {
    this._connectionsService.GET_genders().subscribe({
      next: (res: any) => {
        this.gendersList = res.response;
      },
    });
  }
}
