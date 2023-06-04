import { Component, OnInit } from '@angular/core';
import { loginDto } from '../../services/dto/login.dto';
import { ConnectionsService } from '../../../api/connections.service';
import { ResponseInterface } from '../../../shared/interfaces/response.interface';
import { MessageService } from 'primeng/api';

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
    private _messageService: MessageService
  ) {}

  ngOnInit(): void {}

  public loginUser() {
    this.showBottomCenter();
    this.loading = true;
    this._api.PATCH_login(this.login).subscribe({
      next: (res) => {
        const response = <ResponseInterface>res;
        console.info(response.response);
      },
      error: (err) => {
        const { error }: { error: ResponseInterface } = err;
        console.error(error);
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  showBottomCenter() {
    this._messageService.add({
      key: 'bc',
      severity: 'error',
      summary: 'Success',
      detail: 'Message Content',
    });
  }
}
