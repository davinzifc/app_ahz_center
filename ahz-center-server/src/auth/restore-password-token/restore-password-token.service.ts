import { Injectable } from '@nestjs/common';
import { CreateRestorePasswordTokenDto } from './dto/create-restore-password-token.dto';
import { UpdateRestorePasswordTokenDto } from './dto/update-restore-password-token.dto';

@Injectable()
export class RestorePasswordTokenService {
  create(createRestorePasswordTokenDto: CreateRestorePasswordTokenDto) {
    return 'This action adds a new restorePasswordToken';
  }

  findAll() {
    return `This action returns all restorePasswordToken`;
  }

  findOne(id: number) {
    return `This action returns a #${id} restorePasswordToken`;
  }

  update(id: number, updateRestorePasswordTokenDto: UpdateRestorePasswordTokenDto) {
    return `This action updates a #${id} restorePasswordToken`;
  }

  remove(id: number) {
    return `This action removes a #${id} restorePasswordToken`;
  }
}
