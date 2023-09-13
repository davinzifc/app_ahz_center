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
  PATCH_updateUser(user_id: number, updateData: any) {
    this.updateOptions();
    return this.http.patch(
      `${environments.api_url}auth/user/${user_id}`,
      updateData,
      this.options
    );
  }

  GET_process(user_id?: number, process_id?: number) {
    this.updateOptions();
    return this.http.get(
      `${environments.api_url}api/process-type-user?user=${user_id}&process=${process_id}`,
      this.options
    );
  }

  GET_processSpecific(user_id?: number) {
    this.updateOptions();
    return this.http.get(
      `${environments.api_url}api/process-type-user/specific?user=${user_id}`,
      this.options
    );
  }

  GET_processSpecificReport(process_id: number, user_id?: number) {
    this.updateOptions();
    return this.http.get(
      `${environments.api_url}api/process-type-user/process/${process_id}?user=${user_id}`,
      this.options
    );
  }

  GET_restrictedUSers() {
    this.updateOptions();
    return this.http.get(
      `${environments.api_url}auth/user/restricted/report`,
      this.options
    );
  }

  GET_userById(user_id: any) {
    this.updateOptions();
    return this.http.get(
      `${environments.api_url}auth/user/${user_id}`,
      this.options
    );
  }

  GET_genders() {
    this.updateOptions();
    return this.http.get(
      `${environments.api_url}auth/user/active/genders`,
      this.options
    );
  }

  POST_createUser(body: any) {
    this.updateOptions();
    return this.http.post(
      `${environments.api_url}auth/user`,
      body,
      this.options
    );
  }

  GET_roleByActiveRole() {
    this.updateOptions();
    return this.http.get(
      `${environments.api_url}auth/user-role/active/role`,
      this.options
    );
  }

  GET_usersRoleId(role_id: number) {
    this.updateOptions();
    return this.http.get(
      `${environments.api_url}auth/user/role/${role_id}`,
      this.options
    );
  }

  GET_findInProcessDataByUser(user_id: number) {
    this.updateOptions();
    return this.http.get(
      `${environments.api_url}api/process-type-user/active/user/${user_id}`,
      this.options
    );
  }

  GET_findRecordsPendingByUserAssignment(process_type_id: number) {
    this.updateOptions();
    return this.http.get(
      `${environments.api_url}api/process-type-user/no-assignment/reports/process/${process_type_id}`,
      this.options
    );
  }

  POST_createProcessByUser(body: any) {
    this.updateOptions();
    return this.http.post(
      `${environments.api_url}api/process-type-user`,
      body,
      this.options
    );
  }

  PATCH_Test_01_link(data_id: any, user_id: any) {
    this.updateOptions();
    return this.http.patch(
      `${environments.api_url}api/test-01-alzh/link-data/${data_id}/user/${user_id}`,
      null,
      this.options
    );
  }

  PATCH_Ment_alzh_link(data_id: any, user_id: any) {
    this.updateOptions();
    return this.http.patch(
      `${environments.api_url}api/non-user-ment-alzh/link-data/${data_id}/user/${user_id}`,
      null,
      this.options
    );
  }

  POST_createMent_alzh(body: any) {
    this.updateOptions();
    return this.http.post(
      `${environments.api_url}api/ment-alzh`,
      body,
      this.options
    );
  }

  POST_createTest_01(body: any) {
    this.updateOptions();
    return this.http.post(
      `${environments.api_url}api/test-01-alzh`,
      body,
      this.options
    );
  }
}
