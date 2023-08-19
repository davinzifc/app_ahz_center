import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-management-reports',
  templateUrl: './management-reports.component.html',
  styleUrls: ['./management-reports.component.scss'],
})
export class ManagementReportsComponent implements OnInit {
  public items: any[] | undefined;
  public activeItem: any | undefined;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'User reports',
        icon: 'pi pi-fw pi-file',
        link: 'reports-by-user',
      },
      {
        label: 'Assign reports to a user',
        icon: 'pi pi-fw pi-file-edit',
        link: 'assing-reports',
      },
    ];
    this.activeItem = this.items.find((el) =>
      this.router.url.includes(el.link)
    );
  }

  onActiveItemChange(event: any) {
    this.router.navigate([event.link], { relativeTo: this.route });
    this.activeItem = event;
  }

  activateLast() {
    this.activeItem = (this.items as MenuItem[])[
      (this.items as MenuItem[]).length - 1
    ];
  }
}
