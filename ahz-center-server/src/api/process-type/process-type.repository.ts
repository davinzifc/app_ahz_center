import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ResponseHandler } from '../../shared/handlers/response.handler';
import { ProcessType } from './entities/process-type.entity';

@Injectable()
export class ProcessTypeRepository extends Repository<ProcessType> {
  constructor(
    private dataSource: DataSource,
    private readonly _responseHandler: ResponseHandler,
  ) {
    super(ProcessType, dataSource.createEntityManager());
  }

  existTableRelated(tableRelated: string): Promise<boolean> {
    const query = `select 1 as exist from \`?\` limit 1;`;
    const result = this.query(query, [tableRelated]) as Promise<
      { exist: string }[]
    >;
    return result
      .then((res) => {
        return res?.length ? true : false;
      })
      .catch((err) => false);
  }
}
