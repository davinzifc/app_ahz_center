import { Component, OnInit } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { UserDataService } from '../../../auth/services/user-data.service';
import { ConnectionsService } from '../../../api/connections.service';
import { ResponseInterface } from '../../interfaces/response.interface';
import { OkUserResponse } from '../../../auth/interface/ok-user-response.interface';
import { User } from '../../../auth/interface/user.dto';
import { MenuInterface } from '../../interfaces/menu.interface';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss'],
})
export class CenterComponent implements OnInit {
  public items: MenuInterface[] = [
    {
      name: 'Main',
      icon: PrimeIcons.HOME,
      link: `main`,
      focus: false,
    },
    {
      name: 'Manage tickets',
      icon: PrimeIcons.TICKET,
      link: `management-tickets`,
      focus: false,
    },
  ];
  public profile: MenuInterface = {
    name: 'Profile',
    icon: 'pi pi-user',
    link: `profile/${this._userDataService.controller.user.user_id}`,
    focus: false,
  };
  public userActive: User = new User();
  public ac_name: string = '';
  public ac_last_name: string = '';

  constructor(
    public _userDataService: UserDataService,
    private _connectionsService: ConnectionsService
  ) {
    if (
      this._userDataService.controller.user?.user_id &&
      this._userDataService.controller.user.user_by_role.find(
        (el) => el.role_id <= 4
      )
    ) {
      this.items = [
        ...this.items,
        {
          name: 'Manage Reports',
          icon: PrimeIcons.CHART_BAR,
          link: `management-reports`,
          focus: false,
        },
        {
          name: 'Manage Users',
          icon: PrimeIcons.USERS,
          link: `management-users`,
          focus: false,
        },
      ];
    } else {
      this.items.push({
        name: 'My Reports',
        icon: PrimeIcons.CHART_BAR,
        link: `my-reports`,
        focus: false,
      });
    }
  }

  async ngOnInit() {
    /*await this._userDataService.getUserData();
    this.profile = {
      name: 'Profile',
      icon: 'pi pi-user',
      link: `profile/${this._userDataService.controller.user.user_id}`,
      focus: true,
    };*/
    this._connectionsService.GET_activeProfile().subscribe({
      next: (res) => {
        const response = <ResponseInterface<User>>(<unknown>res);
        this.userActive = response?.response;
        this.ac_name = this.userActive.first_name
          .split(' ')
          .reduce((a, b) => a + b[0], '')
          .toUpperCase();
        this.ac_last_name = this.userActive.last_name
          .split(' ')
          .reduce((a, b) => `${a} ${b[0]}.`, '')
          .toUpperCase();
        this.ac_name =
          this.ac_name.length > 1
            ? this.ac_name
            : `${this.ac_name}${this.userActive?.last_name[0]}`;
      },
    });
  }
}
