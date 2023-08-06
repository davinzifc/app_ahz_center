import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ResponseHandler } from '../../shared/handlers/response.handler';
import { NonUserMentAlzh } from './entities/non-user-ment-alzh.entity';

@Injectable()
export class NonUserMentAlzhRepository extends Repository<NonUserMentAlzh> {
  constructor(
    private dataSource: DataSource,
    private readonly _responseHandler: ResponseHandler,
  ) {
    super(NonUserMentAlzh, dataSource.createEntityManager());
  }
}
