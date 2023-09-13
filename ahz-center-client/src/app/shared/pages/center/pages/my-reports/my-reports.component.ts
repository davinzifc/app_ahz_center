import { Component, OnInit } from '@angular/core';
import { ConnectionsService } from '../../../../../api/connections.service';
import { UserDataService } from '../../../../../auth/services/user-data.service';
import { ColumnsUtils } from '../../../../../utils/format-columns.utils';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-my-reports',
  templateUrl: './my-reports.component.html',
  styleUrls: ['./my-reports.component.scss'],
})
export class MyReportsComponent implements OnInit {
  public processList!: any[];
  public selectProcess!: any;
  public selectSubProcess!: any;
  public averageSubProcess!: any;
  public reportList!: any[];
  public columnReport!: { attr: string[]; title: string[] };
  public textColor!: string;
  public textColorSecondary!: string;
  public surfaceBorder!: string;
  public documentStyle!: CSSStyleDeclaration;
  public isShowMore: boolean = false;
  public data: any;
  public options: any;
  public messages: Message[] = [
    {
      severity: 'info',
      summary: 'Info',
      detail: 'For each table, click on the row you want to interact with.',
    },
  ];

  constructor(
    private _connectionsService: ConnectionsService,
    public _userDataService: UserDataService
  ) {}

  ngOnInit(): void {
    this.documentStyle = getComputedStyle(document.documentElement);
    this.textColor = this.documentStyle.getPropertyValue('--text-color');
    this.textColorSecondary = this.documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    this.surfaceBorder =
      this.documentStyle.getPropertyValue('--surface-border');
    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: this.textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: this.textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            color: this.surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: this.textColorSecondary,
          },
          grid: {
            color: this.surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
    this.getProcess();
  }

  getProcess() {
    this._connectionsService.GET_processSpecific().subscribe((res: any) => {
      this.processList = res.response;
    });
  }

  exportXlsx() {
    ColumnsUtils.exportXlsx(
      this.reportList,
      this.selectProcess.obj_process_type.process_type_name.replace(/ /g, '_')
    );
  }

  getReportProcess() {
    if (this.selectProcess) {
      this._connectionsService
        .GET_processSpecificReport(this.selectProcess.process_type_id)
        .subscribe((res: any) => {
          this.reportList = res.response;
          const tempKey = Object.keys(
            this.reportList.length ? this.reportList[0] : []
          );
          this.columnReport = ColumnsUtils.format(
            tempKey,
            this.selectProcess.process_type_id,
            true
          );
        });
    } else {
      this.reportList = [];
      this.columnReport = { attr: [], title: [] };
    }
  }

  showChar() {
    this.isShowMore = !this.isShowMore;
    if (this.isShowMore) {
      this.updateChar();
    }
  }

  updateChar() {
    const tempCol = {
      attr: [...this.columnReport.attr],
      title: [...this.columnReport.title],
    };

    const dataTime = {
      attr: tempCol.attr.filter((el) => el.includes('time')),
      title: tempCol.title.filter((el) => el.includes('time')),
    };

    const datavalues = {
      attr: tempCol.attr.filter((el) => !el.includes('time')),
      title: tempCol.title.filter((el) => !el.includes('time')),
    };

    datavalues.attr.shift();
    datavalues.title.shift();
    const tempData: any = {};
    datavalues.attr.map((el) => {
      tempData[el] =
        this.reportList.reduce((acc: any, cur: any) => acc + +cur[el], 0) /
        this.reportList.length;
    });

    this.data = {
      labels: datavalues.title,
      datasets: [
        this.selectSubProcess
          ? {
              label: `Tests of ${this.selectProcess.obj_process_type.process_type_name}`,
              backgroundColor:
                this.documentStyle.getPropertyValue('--pink-500'),
              borderColor: this.documentStyle.getPropertyValue('--pink-500'),
              data: datavalues.attr.map((el) => this.selectSubProcess[el]),
            }
          : {
              label: `Pending for select a sub process`,
            },
        {
          label: `Averages of the tests of ${this.selectProcess.obj_process_type.process_type_name}`,
          backgroundColor: this.documentStyle.getPropertyValue('--blue-500'),
          borderColor: this.documentStyle.getPropertyValue('--blue-500'),
          data: datavalues.attr.map((el) => tempData[el]),
        },
      ],
    };
  }
}
