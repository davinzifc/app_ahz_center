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
}