import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { UserDataService } from '../../../auth/services/user-data.service';
import { ConnectionsService } from '../../../api/connections.service';
import { ResponseInterface } from '../../interfaces/response.interface';
import { OkUserResponse } from '../../../auth/interface/ok-user-response.interface';
import { User } from '../../../auth/interface/user.dto';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss'],
})
export class CenterComponent implements OnInit {
  public items: MenuItem[] = [];

  constructor(
    public _userDataService: UserDataService,
    private _connectionsService: ConnectionsService
  ) {}

  ngOnInit(): void {
    this._connectionsService.GET_activeProfile().subscribe({
      next: (res) => {
        const response = <ResponseInterface<User>>(<unknown>res);
        console.log(response?.response?.first_name);
      },
    });
    this.items = [
      {
        label: 'Main',
        icon: 'pi pi-fw pi-home',
        routerLink: `main`,
      },
    ];
  }
}
