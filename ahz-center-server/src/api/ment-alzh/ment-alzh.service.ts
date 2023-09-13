import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateMentAlzhDto } from './dto/create-ment-alzh.dto';
import { UpdateMentAlzhDto } from './dto/update-ment-alzh.dto';
import { UserToken } from '../../shared/globaldto/user-token.dto';
import { GeneralFunctionsUtil } from '../../shared/utils/general-functions.util';
import { ResponseHandler } from '../../shared/handlers/response.handler';
import { UserRepository } from '../../auth/user/user.repository';
import { MentAlzhRepository } from './ment-alzh.repository';

@Injectable()
export class MentAlzhService {
  constructor(
    private readonly _responseHandler: ResponseHandler,
    private readonly _userRepository: UserRepository,
    private readonly _mentAlzhRepository: MentAlzhRepository,
  ) {}

  async create(createMentAlzhDto: CreateMentAlzhDto, user: UserToken) {
    try {
      const vt = GeneralFunctionsUtil.validAttributes(
        createMentAlzhDto,
        CreateMentAlzhDto,
        {
          ignore: ['non_user_ment_alzh_id'],
        },
      );
      if (!vt.validation) {
        return this._responseHandler.throw({
          message: `The attributes ${vt.attrError.join(', ')} are required`,
          response: vt.attrError,
          status: HttpStatus.BAD_REQUEST,
        });
      }
      const active_u = await this._userRepository.findOne({
        where: { user_id: createMentAlzhDto.user_id, is_active: true },
      });

      if (!active_u) {
        return this._responseHandler.throw({
          message: `The user ${createMentAlzhDto.user_id} not found`,
          response: createMentAlzhDto.user_id,
          status: HttpStatus.NOT_FOUND,
        });
      }
      const new_ma = await this._mentAlzhRepository.save({
        ...createMentAlzhDto,
        created_by: user.user_id,
      });

      return this._responseHandler.dataReturn({
        data: {
          message: 'MentAlzh created successfully',
          response: new_ma,
          status: HttpStatus.CREATED,
        },
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  findAll() {
    return `This action returns all mentAlzh`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mentAlzh`;
  }

  update(id: number, updateMentAlzhDto: UpdateMentAlzhDto) {
    return `This action updates a #${id} mentAlzh`;
  }

  remove(id: number) {
    return `This action removes a #${id} mentAlzh`;
  }
}
