import { Injectable } from '@nestjs/common';
import { CreateUserByRoleDto } from './dto/create-user-by-role.dto';
import { UpdateUserByRoleDto } from './dto/update-user-by-role.dto';

@Injectable()
export class UserByRoleService {
  create(createUserByRoleDto: CreateUserByRoleDto) {
    return 'This action adds a new userByRole';
  }

  findAll() {
    return `This action returns all userByRole`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userByRole`;
  }

  update(id: number, updateUserByRoleDto: UpdateUserByRoleDto) {
    return `This action updates a #${id} userByRole`;
  }

  remove(id: number) {
    return `This action removes a #${id} userByRole`;
  }
}
