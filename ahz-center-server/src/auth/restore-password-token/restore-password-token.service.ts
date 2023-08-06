import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { ResponseHandler } from '../../shared/handlers/response.handler';
import { CreateRestorePasswordTokenDto } from './dto/create-restore-password-token.dto';
import { UpdateRestorePasswordTokenDto } from './dto/update-restore-password-token.dto';
import { RestorePasswordTokenRepository } from './restore-password-token.repository';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../user/entities/user.entity';
import { UserRepository } from '../user/user.repository';
import { MessageStatus } from '../../shared/constants/message-status.const';

@Injectable()
export class RestorePasswordTokenService {


  private readonly _logger = new Logger(RestorePasswordTokenService.name);

  constructor(
    protected readonly _responseHandler: ResponseHandler,
    protected readonly _restorePasswordTokenRepository: RestorePasswordTokenRepository,
  ) { }

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

  async createAnyToken(user: User, uuid: string) {
    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() * 12);
    const token = await this._restorePasswordTokenRepository.save({
      token: uuid,
      expiry_date: expiryDate,
      restore_user_id: user.user_id
    });

    return token
  }
}
