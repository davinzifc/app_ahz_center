import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateTest01AlzhDto } from './dto/create-test_01_alzh.dto';
import { UpdateTest01AlzhDto } from './dto/update-test_01_alzh.dto';
import { Test01AlzhRepository } from './test_01_alzh.repository';
import { IsNull, Not } from 'typeorm';
import { ResponseHandler } from '../../../shared/handlers/response.handler';
import { GeneralFunctionsUtil } from '../../../shared/utils/general-functions.util';
import { UserToken } from '../../../shared/globaldto/user-token.dto';

@Injectable()
export class Test01AlzhService {
  constructor(
    private readonly _test01AlzhRepository: Test01AlzhRepository,
    private readonly _responseHandler: ResponseHandler,
  ) {}

  async create(createTest01AlzhDto: CreateTest01AlzhDto, user: UserToken) {
    try {
      const validData = GeneralFunctionsUtil.validAttributes(
        createTest01AlzhDto,
        CreateTest01AlzhDto,
      );

      if (!validData.validation) {
        throw this._responseHandler.throw({
          message: `Attribute ${validData.attrError.join(', ')} is required`,
          response: validData.attrError,
          status: HttpStatus.BAD_REQUEST,
        });
      }

      const res = await this._test01AlzhRepository.save({
        ...createTest01AlzhDto,
        created_by: user.user_id,
      });
    } catch (error) {}
  }

  async linkDataByUserId(user_id: number, data_id: number, user: UserToken) {
    try {
      const data = await this._test01AlzhRepository.findOne({
        where: {
          test_01_alzh_id: data_id,
          user_id: Not(IsNull()),
        },
      });

      if (data) {
        throw this._responseHandler.throw({
          message: 'Data already linked',
          response: null,
          status: HttpStatus.BAD_REQUEST,
        });
      }

      const res = await this._test01AlzhRepository.update(data_id, {
        user_id: user_id,
        update_by: user.user_id,
      });

      return this._responseHandler.dataReturn({
        data: {
          message: 'Data linked successfully',
          response: res,
          status: HttpStatus.OK,
        },
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  findAll() {
    return `This action returns all test01Alzh`;
  }

  findOne(id: number) {
    return `This action returns a #${id} test01Alzh`;
  }

  update(id: number, updateTest01AlzhDto: UpdateTest01AlzhDto) {
    return `This action updates a #${id} test01Alzh`;
  }

  remove(id: number) {
    return `This action removes a #${id} test01Alzh`;
  }
}
