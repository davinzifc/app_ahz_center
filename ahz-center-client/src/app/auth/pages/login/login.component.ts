import { Component, OnInit } from '@angular/core';
import { loginDto } from '../../services/dto/login.dto';
import { ConnectionsService } from '../../../api/connections.service';
import { ResponseInterface } from '../../../shared/interfaces/response.interface';
import { MessageService } from 'primeng/api';
import { TypeToast } from '../../../shared/constants/toast.enum';
import { UserDataService } from '../../services/user-data.service';
import { OkUserResponse } from '../../interface/ok-user-response.interface';
import { Router } from '@angular/router';
import { User } from '../../interface/user.dto';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public login: loginDto = {
    email: '',
    password: '',
  };
  public loading: boolean = false;

  constructor(
    private _api: ConnectionsService,
    private _messageService: MessageService,
    public _userDataService: UserDataService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  public async loginUser() {
    this._messageService.clear();
    this.loading = true;
    try {
      const res = await (<Promise<ResponseInterface<OkUserResponse>>>(
        lastValueFrom(this._api.PATCH_login(this.login))
      ));
      const controller = await this._userDataService.storageManagement(
        res.response.user,
        res.response.token
      );
      this._router.navigate([
        `/center/profile/${this._userDataService.controller.user.user_id}`,
      ]);
      this.loading = false;
    } catch (error) {
      this.showBottomCenter(
        TypeToast.ERROR,
        'Error',
        'Email or password incorrect'
      );
      console.error(error);
      this.loading = false;
    }
  }

  showBottomCenter(type: TypeToast, sumary: string, detail: string) {
    this._messageService.add({
      severity: type,
      summary: sumary,
      detail: detail,
    });
  }
}
