import { Injectable } from '@angular/core';
import { ConnectionsService } from '../../api/connections.service';
import { ColumnsUtils } from '../format-columns.utils';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LinkDataService {
  constructor(private _connectionsService: ConnectionsService) {}

  saveDataLink(data_id: number, user_id: number, process_id: number) {
    console.log(process_id, data_id, user_id);
    switch (process_id) {
      case ColumnsUtils.ProcessEnum.MENTAL_HEALTH:
        return this._connectionsService.PATCH_Ment_alzh_link(data_id, user_id);
      case ColumnsUtils.ProcessEnum.TEST_01:
        return this._connectionsService.PATCH_Test_01_link(data_id, user_id);
      default:
        return new Observable((observer) => {
          observer.next({ error: null });
        });
    }
  }

  getIdDataLink(data: any, process_id: number) {
    switch (process_id) {
      case ColumnsUtils.ProcessEnum.MENTAL_HEALTH:
        return data.non_user_ment_alzh_id;
      case ColumnsUtils.ProcessEnum.TEST_01:
        return data.test_01_alzh_id;
      default:
        return null;
    }
  }
}
