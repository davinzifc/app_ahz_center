import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { UserDataService } from './auth/services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ahz-center-client';
  constructor(
    private primengConfig: PrimeNGConfig,
    private _userDataService: UserDataService
  ) {}

  async ngOnInit() {
    await this._userDataService.getUserData();
    this.primengConfig.zIndex = {
      modal: 2100,
      overlay: 1000,
      menu: 1000,
      tooltip: 1100,
    };
    this.primengConfig.ripple = true;
  }
}
