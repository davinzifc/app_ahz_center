import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { ResponseHandler } from '../../shared/handlers/response.handler';
import { UserRoleRepository } from './user-role.repository';
import { UserToken } from '../../shared/globaldto/user-token.dto';
import { UserByRoleRepository } from '../user-by-role/user-by-role.repository';
import { MoreThan, MoreThanOrEqual } from 'typeorm';

@Injectable()
export class UserRoleService {
  constructor(
    private readonly _responseHandler: ResponseHandler,
    private readonly _userRoleRepository: UserRoleRepository,
    private readonly _userByRoleRepository: UserByRoleRepository,
  ) {}

  create(createUserRoleDto: CreateUserRoleDto) {
    return 'This action adds a new userRole';
  }

  async findAll() {
    try {
      const res = await this._userRoleRepository.find();
      return this._responseHandler.dataReturn({
        data: {
          message: `Find all userRole`,
          response: res,
          status: HttpStatus.OK,
        },
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  async findAllByActiveRole(user: UserToken) {
    try {
      const roleActive = await this._userByRoleRepository.isValidRole(
        user.user_id,
      );
      const res = await this._userRoleRepository.find({
        where: {
          user_role_id:
            roleActive == 1
              ? MoreThanOrEqual(roleActive)
              : MoreThan(roleActive),
        },
      });
      return this._responseHandler.dataReturn({
        data: {
          message: `Find all userRole`,
          response: res,
          status: HttpStatus.OK,
        },
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} userRole`;
  }

  update(id: number, updateUserRoleDto: UpdateUserRoleDto) {
    return `This action updates a #${id} userRole`;
  }

  remove(id: number) {
    return `This action removes a #${id} userRole`;
  }
}
