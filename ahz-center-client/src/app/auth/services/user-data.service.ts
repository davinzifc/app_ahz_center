import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { User, UserByRole } from '../interface/user.dto';
import { UserControllerInterface } from '../interface/user-controller.dto';
import { ConnectionsService } from '../../api/connections.service';
import { ResponseInterface } from '../../shared/interfaces/response.interface';
import { OkUserResponse } from '../interface/ok-user-response.interface';
import { tap } from 'rxjs';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  public controller: UserControllerInterface = {
    token: '',
    user: new User(),
    roleId: null,
  };

  constructor(
    private _connectionsService: ConnectionsService,
    private router: Router
  ) {}

  public activeUser() {
    let validation = false;
    if (localStorage.getItem('token')) {
      const token: any = localStorage.getItem('token');
      try {
        const tokenPayload: any = jwt_decode(token);
        const tokenExpirationDate = new Date(tokenPayload.exp * 1000);
        const currentTime = new Date();

        if (tokenExpirationDate > currentTime) {
          validation = true;
        } else {
          validation = false;
        }
      } catch (error) {
        validation = false;
      }
    } else {
      validation = false;
    }
    return validation;
  }

  public getUserData() {
    const token_data = localStorage.getItem('token');
    if (!token_data) return this.singOut();
    const userStorage = localStorage.getItem('user');
    if (userStorage) {
      this.controller = {
        user: JSON.parse(userStorage),
        token: token_data,
        roleId: this.getRoleUser(JSON.parse(userStorage).user_by_role),
      };
      return this.controller;
    }

    this._connectionsService.GET_activeProfile(token_data).subscribe({
      next: (res: any) => {
        this.controller = {
          user: res.response,
          token: token_data,
          roleId: this.getRoleUser(res.response.user_by_role),
        };
      },
    });

    return this.controller;
  }

  getRoleUser(data: UserByRole[]) {
    if (data.length) {
      return data[0].role_id;
    }

    return null;
  }

  public async storageManagement(user: User, token: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    return await this.getUserData();
  }

  public singOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.controller = {
      token: '',
      user: new User(),
      roleId: null,
    };
    this.router.navigate(['/login']);
  }
}
