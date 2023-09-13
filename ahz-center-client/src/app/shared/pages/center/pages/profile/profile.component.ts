import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../../../../auth/services/user-data.service';
import { ConnectionsService } from '../../../../../api/connections.service';
import { Gender, User } from '../../../../../auth/interface/user.dto';
import { ResponseInterface } from '../../../../interfaces/response.interface';
import { MessageService } from 'primeng/api';
import { ProcessDataService } from '../../../../../utils/util-service/process-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public user: User = new User();
  public age: number = 0;
  public inputEditable: any = {
    phone_number: true,
    identity_card: true,
  };
  public preValidInput: any = {
    identity_card: false,
  };
  public shortName: string = 'N/A';

  constructor(
    public _userDataService: UserDataService,
    private _connectionsService: ConnectionsService,
    private _messageService: MessageService,
    public _processDataService: ProcessDataService
  ) {}

  ngOnInit(): void {
    this.findUser();
  }

  findUser() {
    this._connectionsService.GET_activeProfile().subscribe({
      next: (res) => {
        const response = <ResponseInterface<User>>(<unknown>res);
        this.user = response?.response;
        this.shortName = this._processDataService.getInitials(
          this.user.first_name,
          this.user.last_name
        );
        this.preValidInput.identity_card = !!this.user.identity_card;
        if (!this.user.obj_gender) {
          this.user.obj_gender = new Gender();
        }
        if (this.user?.birthdate) {
          const diff =
            new Date().getTime() - new Date(this.user.birthdate).getTime();
          this.age = Math.floor(diff / 31536000000);
        }
      },
    });
  }

  toggleFunction(key: string) {
    if (this.inputEditable[key]) {
      this.inputEditable[key] = !this.inputEditable[key];
    } else {
      const temp: any = this.user;
      this._connectionsService
        .PATCH_updateActiveProfile({
          [key]: temp[key],
        })
        .subscribe({
          next: () => {
            this.findUser();
            this._messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'The user has been updated correctly.',
            });
            this.inputEditable[key] = !this.inputEditable[key];
          },
        });
    }
  }

  saveAttributes() {
    console.log('hola mundo');
  }
}
