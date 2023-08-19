import { Component, OnInit } from '@angular/core';
import { CreateUser, User } from '../../../../../../auth/interface/user.dto';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { ConnectionsService } from '../../../../../../api/connections.service';
import { ManagementUserService } from '../../../../../../auth/services/management-user.service';
import { UserDataService } from '../../../../../../auth/services/user-data.service';

@Component({
  selector: 'app-create-user-modal',
  templateUrl: './create-user-modal.component.html',
  styleUrls: ['./create-user-modal.component.scss'],
})
export class CreateUserModalComponent implements OnInit {
  public newUser: any = new CreateUser();
  public waiting: boolean = false;
  public integrity: string = '';
  public gendersList: any[] = [];
  public is_admin: boolean = false;
  public rolesList: any[] = [];
  public userType: any[] = [
    {
      type: false,
      name: 'Natural user',
    },
  ];

  constructor(
    public _userDataService: UserDataService,
    private _managementUserService: ManagementUserService,
    private _connectionsService: ConnectionsService,
    private _ref: DynamicDialogRef,
    public messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.newUser.birthdate = new Date();
    this.getGenders();
    this.getRoles();
    this.newUser.user_role_id = 5;
    this.newUser.gender_id = 1;
    this.newUser.is_application = false;
    this.is_admin = !!this._userDataService.controller.user.user_by_role.find(
      (el) => el.role_id <= 2
    );
    if (this.is_admin)
      this.userType.push({
        type: true,
        name: 'Application user',
      });
    this.integrity = btoa(JSON.stringify(this.newUser));
  }

  onRoleChange(event: any) {
    this.newUser.is_application = event == 3 ? true : false;
  }

  closeModal(cancel: boolean) {
    if (!cancel) {
      this.waiting = true;
      this._connectionsService.POST_createUser(this.newUser).subscribe({
        next: (res: any) => {
          this._managementUserService.getUsers();
          this.waiting = false;
          this._ref.close({
            severity: 'success',
            summary: 'Success',
            detail: 'The user has been updated correctly.',
          });
        },
        error: (err: any) => {
          this.waiting = false;
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'The user has not been updated correctly.',
          });
        },
      });
    } else {
      if (this.integrity === btoa(JSON.stringify(this.newUser))) {
        this._ref.close(null);
      } else {
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
    }
  }

  getRoles() {
    this._connectionsService.GET_roleByActiveRole().subscribe({
      next: (res: any) => {
        this.rolesList = res.response;
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
