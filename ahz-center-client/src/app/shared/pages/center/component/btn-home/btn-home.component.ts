import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/auth/interface/user.dto';
import { MenuInterface } from 'src/app/shared/interfaces/menu.interface';

@Component({
  selector: 'app-btn-home',
  templateUrl: './btn-home.component.html',
  styleUrls: ['./btn-home.component.scss'],
})
export class BtnHomeComponent implements OnInit {
  @Input() user: User = new User();
  @Input() av_name: string = '';
  @Input() av_last_name: string = '';
  @Input() item_menu: MenuInterface = {
    icon: 'pi pi-circle',
    name: 'undefined',
    link: '',
    focus: false,
  };

  constructor() {}

  ngOnInit() {}
}
