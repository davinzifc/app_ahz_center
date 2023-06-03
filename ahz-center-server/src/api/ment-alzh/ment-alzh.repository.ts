import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ResponseHandler } from '../../shared/handlers/response.handler';
import { MentAlzh } from './entities/ment-alzh.entity';

@Injectable()
export class MentAlzhRepository extends Repository<MentAlzh> {
  constructor(
    private dataSource: DataSource,
    private readonly _responseHandler: ResponseHandler,
  ) {
    super(MentAlzh, dataSource.createEntityManager());
  }
}
