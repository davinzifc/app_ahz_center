import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ResponseHandler } from '../../shared/handlers/response.handler';
import { UserRole } from './entities/user-role.entity';

@Injectable()
export class UserRoleRepository extends Repository<UserRole> {
  constructor(
    private dataSource: DataSource,
    private readonly _responseHandler: ResponseHandler,
  ) {
    super(UserRole, dataSource.createEntityManager());
  }
}