import { Component, OnInit } from '@angular/core';
import { loginDto } from '../../services/dto/login.dto';
import { ConnectionsService } from '../../../api/connections.service';
import { ResponseInterface } from '../../../shared/interfaces/response.interface';
import { MessageService } from 'primeng/api';
import { TypeToast } from '../../../shared/constants/toast.enum';
import { UserDataService } from '../../services/user-data.service';
import { OkUserResponse } from '../../interface/ok-user-response.interface';
import { Router } from '@angular/router';

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

  public loginUser() {
    this._messageService.clear();
    this.loading = true;
    this._api.PATCH_login(this.login).subscribe({
      next: (res) => {
        const response = <ResponseInterface>res;
        const { token, user } = <OkUserResponse>response.response;
        this._userDataService.storageManagement(user, token);
        this._router.navigate(['/main/profile/12']);
      },
      error: (err) => {
        this.showBottomCenter(
          TypeToast.ERROR,
          'Error',
          'Email or password incorrect'
        );
        const { error }: { error: ResponseInterface } = err;
        console.error(error);
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  showBottomCenter(type: TypeToast, sumary: string, detail: string) {
    this._messageService.add({
      severity: type,
      summary: sumary,
      detail: detail,
    });
  }
}
