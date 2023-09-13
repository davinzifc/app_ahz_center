import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectionsService } from '../../../../../../../../api/connections.service';
import { User } from '../../../../../../../../auth/interface/user.dto';

@Injectable({
  providedIn: 'root',
})
export class CreateDataService {
  public user: User = new User();
  public process_id!: number;
  public readonly process_meta_data: {
    [key: number]: { attr: string; title: string; type: string; value: any }[];
  } = {
    0: [],
    1: [
      {
        attr: 'orientacion_1',
        title: 'Orientación 1',
        type: 'number',
        value: null,
      },
      {
        attr: 'orientacion_1_time',
        title: 'Orientación 1 Time',
        type: 'text',
        value: null,
      },
      {
        attr: 'orientacion_2',
        title: 'Orientación 2',
        type: 'number',
        value: null,
      },
      {
        attr: 'orientacion_2_time',
        title: 'Orientación 2 Time',
        type: 'text',
        value: null,
      },
      {
        attr: 'fijacion',
        title: 'Fijación',
        type: 'number',
        value: null,
      },
      {
        attr: 'fijacion_time',
        title: 'Fijación Time',
        type: 'text',
        value: null,
      },
      {
        attr: 'lenguaje',
        title: 'Lenguaje',
        type: 'number',
        value: null,
      },
      {
        attr: 'lenguaje_time',
        title: 'Lenguaje Time',
        type: 'text',
        value: null,
      },
      {
        attr: 'calculo',
        title: 'Cálculo',
        type: 'number',
        value: null,
      },
      {
        attr: 'calculo_time',
        title: 'Cálculo Time',
        type: 'text',
        value: null,
      },
      {
        attr: 'memoria',
        title: 'Memoria',
        type: 'number',
        value: null,
      },
      {
        attr: 'memoria_time',
        title: 'Memoria Time',
        type: 'text',
        value: null,
      },
    ],
    2: [
      {
        attr: 'test_value',
        title: 'Test Value',
        type: 'number',
        value: null,
      },
      {
        attr: 'test_time',
        title: 'Test Time',
        type: 'date',
        value: null,
      },
      {
        attr: 'uuid_test_code',
        title: 'Uuid Test Code',
        type: 'text',
        value: null,
      },
    ],
  };

  constructor(private _connectionsService: ConnectionsService) {}

  setData(user: any, process: number) {
    this.user = user;
    this.process_id = process;
  }

  saveData(body: any) {
    body['user_id'] = this.user.user_id;
    console.log('line 106: ', body);
    switch (this.process_id) {
      case 1:
        return this._connectionsService.POST_createMent_alzh({
          ...body,
          user_id: this.user.user_id,
        });
      case 2:
        return this._connectionsService.POST_createTest_01({
          ...body,
          user_id: this.user.user_id,
        });
    }
    return new Observable((observer) => {
      observer.next({
        response: {},
        statusCode: 400,
        message: 'No Process selected',
        timestamp: new Date(),
        path: '/api',
      });
    });
  }

  cleanData() {
    this.user = new User();
    this.process_id = 0;
  }
}
