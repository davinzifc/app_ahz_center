import { Component, OnInit, Input } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { User } from 'src/app/auth/interface/user.dto';
import { MenuInterface } from 'src/app/shared/interfaces/menu.interface';
import { CreateDataService } from '../../services/create-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { v4 as uuidv4 } from 'uuid';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { DataTemp } from './entity-temp/data-temp';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    DividerModule,
  ],
})
export class CreateDataComponent implements OnInit {
  public dataSave: any = {};
  public waiting: boolean = false;
  constructor(
    private _ref: DynamicDialogRef,
    public _createDataService: CreateDataService
  ) {}

  ngOnInit() {
    this._createDataService.process_meta_data[
      this._createDataService.process_id
    ].forEach((element) => {
      this.dataSave[element.attr] = /uuid/.test(element.attr.toLowerCase())
        ? uuidv4()
        : '';
    });
  }

  saveData(cancel: boolean) {
    if (!cancel) {
      this._createDataService.saveData(this.dataSave).subscribe({
        next: (res) => {
          console.log(res);
          this._ref.close({
            severity: 'success',
            summary: 'Success',
            detail: 'Data created successfully',
          });
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this._ref.close({
        severity: 'success',
        summary: 'Success',
        detail: 'Discarted data',
      });
    }
  }

  checkType(type: string) {
    return /uuid/.test(type.toLowerCase());
  }
}
