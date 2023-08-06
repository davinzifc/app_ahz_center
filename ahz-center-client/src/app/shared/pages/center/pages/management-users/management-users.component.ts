import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConnectionsService } from '../../../../../api/connections.service';
import { ManagementUserService } from '../../../../../auth/services/management-user.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { EditUserModalComponent } from './edit-user-modal/edit-user-modal.component';
import { CreateUserModalComponent } from './create-user-modal/create-user-modal.component';

@Component({
  selector: 'app-management-users',
  templateUrl: './management-users.component.html',
  styleUrls: ['./management-users.component.scss'],
})
export class ManagementUsersComponent implements OnInit, OnDestroy {
  public users: any[] = [];
  public selectedUser!: any;
  public ref!: DynamicDialogRef;
  public modalOpened: boolean = false;

  constructor(
    private _connectionsService: ConnectionsService,
    public _managementUserService: ManagementUserService,
    public dialogService: DialogService,
    public messageService: MessageService
  ) {}

  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
    this._managementUserService.editableUser = null;
    this._managementUserService.userManagementList = [];
  }

  ngOnInit(): void {
    this.getUsers();
  }

  show(user: any) {
    this.modalOpened = true;
    this._managementUserService.editableUser = user;
    this.ref = this.dialogService.open(EditUserModalComponent, {
      header: `Edit user: [${user.user_id}] ${user.first_name} ${user.last_name}`,
      width: '40%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
    });

    this.ref.onClose.subscribe((res) => {
      this._managementUserService.editableUser = null;
      this.modalOpened = false;
      if (res) {
        setTimeout(() => {
          this.messageService.add(res);
        }, 100);
      }
    });
  }

  createUser() {
    this.modalOpened = true;
    this.ref = this.dialogService.open(CreateUserModalComponent, {
      header: `Create a new user`,
      width: '40%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
    });

    this.ref.onClose.subscribe((res) => {
      this.modalOpened = false;
      if (res) {
        setTimeout(() => {
          this.messageService.add(res);
        }, 100);
      }
    });
  }

  getUsers() {
    this._connectionsService.GET_restrictedUSers().subscribe({
      next: (res: any) => {
        this._managementUserService.userManagementList = res.response;
      },
    });
  }
}
