import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ResponseHandler } from '../../shared/handlers/response.handler';
import { UserByRole } from './entities/user-by-role.entity';

@Injectable()
export class UserByRoleRepository extends Repository<UserByRole> {
  constructor(
    private dataSource: DataSource,
    private readonly _responseHandler: ResponseHandler,
  ) {
    super(UserByRole, dataSource.createEntityManager());
  }

  async isValidRole(userId: number): Promise<number> {
    const query = `
      select 
        min(ubr.role_id) max_role  
      from user_by_role ubr 
      where ubr.user_id = ? 
        and ubr.is_active = true
      group by ubr.user_id;
    `;
    const result = this.query(query, [userId]) as Promise<
      { max_role: number }[]
    >;
    return result
      .then((res) => {
        return res?.length ? res[0].max_role : null;
      })
      .catch((err) => null);
  }
}
