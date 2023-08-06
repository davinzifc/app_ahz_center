import { Component, Input } from '@angular/core';
import { User } from 'src/app/auth/interface/user.dto';
import { MenuInterface } from 'src/app/shared/interfaces/menu.interface';

@Component({
  selector: 'app-content-menu',
  templateUrl: './content-menu.component.html',
  styleUrls: ['./content-menu.component.scss'],
})
export class ContentMenuComponent {
  @Input() menuItems: MenuInterface[] = [
    {
      icon: 'pi pi-circle',
      name: 'undefined',
      link: '',
      focus: false,
    },
  ];
  @Input() user: User = new User();
  @Input() av_name: string = '';
  @Input() av_last_name: string = '';
  @Input() itemMenu: MenuInterface = {
    icon: 'pi pi-circle',
    name: 'undefined',
    link: '',
    focus: false,
  };

  onFocusMenu(item: MenuInterface) {
    this.menuItems.forEach((menu) => (menu.focus = false));
    this.itemMenu.focus = false;
    item.focus = true;
  }
}
//`Home`, `My Reports`, `My Appointments`
