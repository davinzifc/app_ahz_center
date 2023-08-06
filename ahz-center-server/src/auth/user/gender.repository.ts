import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ResponseHandler } from '../../shared/handlers/response.handler';
import { Gender } from './entities/gender.entity';

@Injectable()
export class GenderRepository extends Repository<Gender> {
  constructor(
    private dataSource: DataSource,
    private readonly _responseHandler: ResponseHandler,
  ) {
    super(Gender, dataSource.createEntityManager());
  }
}
