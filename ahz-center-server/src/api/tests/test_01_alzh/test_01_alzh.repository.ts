import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Test01Alzh } from './entities/test_01_alzh.entity';
import { ResponseHandler } from '../../../shared/handlers/response.handler';

@Injectable()
export class Test01AlzhRepository extends Repository<Test01Alzh> {
  constructor(
    private dataSource: DataSource,
    private readonly _responseHandler: ResponseHandler,
  ) {
    super(Test01Alzh, dataSource.createEntityManager());
  }
}
