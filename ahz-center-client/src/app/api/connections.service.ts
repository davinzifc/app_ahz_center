import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParamsOptions,
} from '@angular/common/http';
import { environments } from '../environments/environments';
import { loginDto } from '../auth/services/dto/login.dto';
import { UserDataService } from '../auth/services/user-data.service';

@Injectable({
  providedIn: 'root',
})
export class ConnectionsService {
  private options: any = {
    headers: { auth: this._userDataService.controller.token },
  };

  constructor(
    public http: HttpClient,
    private readonly _userDataService: UserDataService
  ) {}

  PATCH_login(body: loginDto) {
    return this.http.patch(
      `${environments.api_url}auth/sing-in`,
      body,
      this.options
    );
  }

  GET_activeProfile() {
    return this.http.get(
      `${environments.api_url}auth/user/active/profile`,
      this.options
    );
  }
}
