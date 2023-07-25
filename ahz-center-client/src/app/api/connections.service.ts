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
  private options: { headers: { auth: any } } = {
    headers: { auth: '' },
  };

  constructor(public http: HttpClient) {}

  updateOptions(token?: string) {
    this.options.headers.auth = token ? token : localStorage.getItem('token');
  }

  PATCH_login(body: loginDto) {
    return this.http.patch(
      `${environments.api_url}auth/sing-in`,
      body,
      this.options
    );
  }

  GET_activeProfile(token?: string) {
    this.updateOptions(token);
    return this.http.get(
      `${environments.api_url}auth/user/active/profile`,
      this.options
    );
  }

  PATCH_updateActiveProfile(updateData: any) {
    this.updateOptions();
    return this.http.patch(
      `${environments.api_url}auth/user/active/profile`,
      updateData,
      this.options
    );
  }
}
