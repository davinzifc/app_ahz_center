import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ResponseHandler } from '../../shared/handlers/response.handler';
import { ProcessTypeUser } from './entities/process-type-user.entity';

@Injectable()
export class ProcessTypeUserRepository extends Repository<ProcessTypeUser> {
  constructor(
    private dataSource: DataSource,
    private readonly _responseHandler: ResponseHandler,
  ) {
    super(ProcessTypeUser, dataSource.createEntityManager());
  }

  async findCountTypeOfPRocess(table_related: string[], user_id: number) {
    let countData: any = {};
    try {
      for (const i of table_related) {
        const query = `
        SELECT COUNT(*) as ${i} FROM ${i} WHERE user_id = ${user_id} AND is_active = true;
        `;
        const res = (await this.query(query)) as { [key: string]: string }[];
        countData[i] = res.length ? res[0][i] : 0;
      }

      return countData;
    } catch (error) {
      return null;
    }
  }

  findInProcessDataByUser(user_id: number) {
    const query = `
    SELECT pt.*, IF(ptu.process_type_user_id IS NULL, FALSE, TRUE) AS in_progress
    FROM process_type pt 
    	LEFT JOIN process_type_user ptu ON ptu.process_type_id = pt.process_type_id 
    									AND ptu.user_id = ?
    									AND ptu.is_active > 0
    `;

    return this.query(query, [user_id])
      .then((res) => res)
      .catch((err) => []);
  }

  async finDataReportAnyProcess(table_related: string, user_id: number) {
    try {
      const query = `
        SELECT * FROM ${table_related} WHERE user_id = ${user_id} AND is_active = true;
        `;
      const res = await this.query(query);
      return res;
    } catch (error) {
      return null;
    }
  }
}
