import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParamsOptions,
} from '@angular/common/http';
import { environments } from '../environments/environments';
import { loginDto } from '../auth/services/dto/login.dto';

@Injectable({
  providedIn: 'root',
})
export class ConnectionsService {
  constructor(public http: HttpClient) {}

  PATCH_login(body: loginDto) {
    return this.http.patch(`${environments.api_url}auth/sing-in`, body);
  }
}
