import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateProcessTypeUserDto } from './dto/create-process-type-user.dto';
import { UpdateProcessTypeUserDto } from './dto/update-process-type-user.dto';
import { ResponseHandler } from '../../shared/handlers/response.handler';
import { ProcessTypeUserRepository } from './process-type-user.repository';
import { GeneralFunctionsUtil } from '../../shared/utils/general-functions.util';
import { UserToken } from '../../shared/globaldto/user-token.dto';
import { ProcessTypeRepository } from '../process-type/process-type.repository';
import { UserByRoleRepository } from '../../auth/user-by-role/user-by-role.repository';
import { Test01AlzhRepository } from '../tests/test_01_alzh/test_01_alzh.repository';
import { NonUserMentAlzhRepository } from '../non-user-ment-alzh/non-user-ment-alzh.repository';
import { ProcessTypeEnum } from '../../shared/constants/enum.const';
import { IsNull } from 'typeorm';

@Injectable()
export class ProcessTypeUserService {
  constructor(
    private readonly _responseHandler: ResponseHandler,
    private readonly _test01AlzhRepository: Test01AlzhRepository,
    private readonly _nonUserMentAlzhRepository: NonUserMentAlzhRepository,
    private readonly _processTypeUserRepository: ProcessTypeUserRepository,
    private readonly _processTypeRepository: ProcessTypeRepository,
    private readonly _userByRoleRepository: UserByRoleRepository,
  ) {}

  async findReportdsByProcessType(process_type_id: ProcessTypeEnum) {
    try {
      let res: any = null;
      const pt = await this._processTypeRepository.findOne({
        where: {
          process_type_id: process_type_id,
        },
      });

      if (!pt) {
        throw this._responseHandler.throw({
          message: 'Process type not exist',
          response: null,
          status: HttpStatus.BAD_REQUEST,
        });
      }

      switch (pt.process_type_id) {
        case ProcessTypeEnum.NON_USER_MENT_ALZH:
          res = await this._nonUserMentAlzhRepository.find({
            where: {
              is_assigned: false,
              is_active: true,
            },
          });
          break;
        case ProcessTypeEnum.TEST_01_ALZH:
          res = await this._test01AlzhRepository.find({
            where: {
              user_id: IsNull(),
              is_active: true,
            },
          });
          break;
      }

      return this._responseHandler.dataReturn({
        data: {
          message: 'Process type user list',
          response: res,
          status: HttpStatus.OK,
        },
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  async create(
    createProcessTypeUserDto: CreateProcessTypeUserDto,
    user: UserToken,
  ) {
    try {
      const vt = GeneralFunctionsUtil.validAttributes(
        createProcessTypeUserDto,
        CreateProcessTypeUserDto,
      );
      if (!vt.validation) {
        throw this._responseHandler.throw({
          message: 'Invalid attributes',
          response: vt.attrError,
          status: HttpStatus.BAD_REQUEST,
        });
      }
      const tempRes = await this._processTypeUserRepository.findOne({
        where: {
          user_id: createProcessTypeUserDto.user_id,
          process_type_id: createProcessTypeUserDto.process_type_id,
          created_by: user.user_id,
        },
      });

      if (tempRes?.is_active) {
        throw this._responseHandler.throw({
          message: 'Process type user already exist',
          response: tempRes,
          status: HttpStatus.BAD_REQUEST,
        });
      } else if (tempRes) {
        await this._processTypeUserRepository.update(
          tempRes.process_type_user_id,
          {
            is_active: true,
            update_by: user.user_id,
          },
        );

        return this._responseHandler.dataReturn({
          data: {
            message: 'Process type user updated',
            response: { ...tempRes, is_active: true, update_by: user.user_id },
            status: HttpStatus.OK,
          },
        });
      }

      const { process_type_id, user_id } = createProcessTypeUserDto;

      const res = await this._processTypeUserRepository.save({
        process_type_id,
        user_id,
        created_by: user.user_id,
      });

      return this._responseHandler.dataReturn({
        data: {
          message: 'Process type user created',
          response: res,
          status: HttpStatus.OK,
        },
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  async findAll(user?: number, process?: number) {
    try {
      const res = await this._processTypeUserRepository.find({
        where: {
          ...(user ? { user_id: user } : {}),
          ...(process ? { process_type_id: process } : {}),
        },
        relations: {
          obj_process_type: true,
        },
      });

      res.map((el) => {
        delete el.obj_process_type.table_related;
      });

      return this._responseHandler.dataReturn({
        data: {
          message: 'Process type user list',
          response: res,
          status: HttpStatus.OK,
        },
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  async findSpecificUser(user: number, userToken: UserToken) {
    try {
      let res = await this._processTypeUserRepository.find({
        where: {
          user_id: user || userToken.user_id,
          is_active: true,
        },
        relations: {
          obj_process_type: true,
        },
      });

      const count =
        await this._processTypeUserRepository.findCountTypeOfPRocess(
          res.map((el) => el.obj_process_type.table_related),
          user || userToken.user_id,
        );

      res.map((el) => {
        el['count'] = count[el.obj_process_type.table_related];
        delete el.obj_process_type.table_related;
      });

      return this._responseHandler.dataReturn({
        data: {
          message: 'Process type user list',
          response: res,
          status: HttpStatus.OK,
        },
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  async findAllPendingReportsByProcess(process_type_id: number) {
    try {
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  async findInProcessDataByUser(user_id: number) {
    try {
      const res = await this._processTypeUserRepository.findInProcessDataByUser(
        user_id,
      );

      return this._responseHandler.dataReturn({
        data: {
          message: 'Process type user list',
          response: res,
          status: HttpStatus.OK,
        },
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  async findDataReportAnyProcess(
    process_id: number,
    user: UserToken,
    user_id: number,
  ) {
    try {
      const role = await this._userByRoleRepository.isValidRole(user.user_id);
      if (user_id && role > 4 && user.user_id !== user_id) {
        throw this._responseHandler.throw({
          message: 'User not authorized',
          response: null,
          status: HttpStatus.BAD_REQUEST,
        });
      }

      const process = await this._processTypeRepository.findOne({
        where: {
          process_type_id: process_id,
        },
      });

      if (!process) {
        throw this._responseHandler.throw({
          message: 'Process type not exist',
          response: process_id,
          status: HttpStatus.BAD_REQUEST,
        });
      }
      const res = await this._processTypeUserRepository.finDataReportAnyProcess(
        process.table_related,
        user_id || user.user_id,
      );
      return this._responseHandler.dataReturn({
        data: {
          message: 'Process type user list',
          response: res,
          status: HttpStatus.OK,
        },
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  findOne(id: number) {
    try {
      const res = this._processTypeUserRepository.findOne({
        where: {
          process_type_user_id: id,
          is_active: true,
        },
      });

      res.then((el) => {
        delete el.obj_process_type.table_related;
      });

      return this._responseHandler.dataReturn({
        data: {
          message: 'Process type user',
          response: res,
          status: HttpStatus.OK,
        },
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  async remove(id: number) {
    try {
      await this._processTypeUserRepository.update(id, {
        is_active: false,
      });
      return this._responseHandler.dataReturn({
        data: {
          message: 'Process type user deleted',
          response: null,
          status: HttpStatus.OK,
        },
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }
}
