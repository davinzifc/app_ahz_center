import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ResponseHandler } from '../../shared/handlers/response.handler';
import { RestorePasswordToken } from './entities/restore-password-token.entity';

@Injectable()
export class RestorePasswordTokenRepository extends Repository<RestorePasswordToken> {
  constructor(
    private dataSource: DataSource,
    private readonly _responseHandler: ResponseHandler,
  ) {
    super(RestorePasswordToken, dataSource.createEntityManager());
  }
}