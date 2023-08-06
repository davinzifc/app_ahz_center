import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ResponseHandler } from '../../shared/handlers/response.handler';
import { User } from './entities/user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(
    private dataSource: DataSource,
    private readonly _responseHandler: ResponseHandler,
  ) {
    super(User, dataSource.createEntityManager());
  }

  findAllUserByActiveRole(role_id: number) {
    const queryData = `
      select 
        u.created_at,
        u.created_by,
        u.updated_at,
        u.updated_by,
        u.is_active,
        u.user_id,
        u.first_name,
        u.last_name,
        u.email,
        u.is_application,
        u.birthdate,
        u.identity_card,
        u.phone_number,
        u.gender_id  
      from user u
      inner join user_by_role ubr on u.user_id = ubr.user_id
      where ubr.is_active > 0
            and u.is_active > 0
            and ubr.role_id >= ?;
    `;

    const res = this.query(queryData, [role_id]) as Promise<User[]>;
    return res.then((res) => res).catch((err) => []);
  }

  findAllUserByRoleId(role_id: number) {
    const queryData = `
      select 
        u.created_at,
        u.created_by,
        u.updated_at,
        u.updated_by,
        u.is_active,
        u.user_id,
        u.first_name,
        u.last_name,
        u.email,
        u.is_application,
        u.birthdate,
        u.identity_card,
        u.phone_number,
        u.gender_id  
      from user u
      inner join user_by_role ubr on u.user_id = ubr.user_id
      where ubr.is_active > 0
            and u.is_active > 0
            and ubr.role_id = ?;
    `;

    const res = this.query(queryData, [role_id]) as Promise<User[]>;
    return res.then((res) => res).catch((err) => []);
  }
}
