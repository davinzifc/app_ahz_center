import { Injectable } from '@nestjs/common';
import { CreateRoleByActionDto } from './dto/create-role-by-action.dto';
import { UpdateRoleByActionDto } from './dto/update-role-by-action.dto';

@Injectable()
export class RoleByActionService {
  create(createRoleByActionDto: CreateRoleByActionDto) {
    return 'This action adds a new roleByAction';
  }

  findAll() {
    return `This action returns all roleByAction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} roleByAction`;
  }

  update(id: number, updateRoleByActionDto: UpdateRoleByActionDto) {
    return `This action updates a #${id} roleByAction`;
  }

  remove(id: number) {
    return `This action removes a #${id} roleByAction`;
  }
}
