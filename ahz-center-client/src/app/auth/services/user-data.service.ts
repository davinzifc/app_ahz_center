import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { User } from '../interface/user.dto';
import { UserControllerInterface } from '../interface/user-controller.dto';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  public controller: UserControllerInterface = {
    token: '',
    user: new User(),
  };

  constructor() {}

  public activeUser() {
    let validation = false;
    this.getUserData();
    if (this.controller?.token && localStorage.getItem('token')) {
      try {
        const tokenPayload: any = jwt_decode(this.controller?.token);
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
    this.controller = {
      token: token_data || '',
      user: jwt_decode(token_data),
    };
  }

  public storageManagement(user: User, token: string) {
    localStorage.setItem('token', token);
    this.getUserData();
  }

  public singOut() {
    localStorage.removeItem('token');
    this.controller = {
      token: '',
      user: new User(),
    };
  }
}
