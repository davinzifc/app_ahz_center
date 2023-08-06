import { Injectable } from '@angular/core';
import { ConnectionsService } from '../../api/connections.service';

@Injectable({
  providedIn: 'root',
})
export class ManagementUserService {
  public editableUser: any = null;
  public userManagementList: any[] = [];
  constructor(private _connectionsService: ConnectionsService) {}

  getUsers() {
    this._connectionsService.GET_restrictedUSers().subscribe({
      next: (res: any) => {
        this.userManagementList = res.response;
      },
    });
  }
}
