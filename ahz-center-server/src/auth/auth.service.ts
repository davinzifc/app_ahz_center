import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { env } from 'process';
import { MessageStatus } from '../shared/constants/message-status.const';
import { ResponseHandler } from '../shared/handlers/response.handler';
import { BcryptPasswordEncoder } from '../shared/utils/bcrypt.util';
import { UserSingInDto } from './dto/auth-singin.dto';
import { UserRepository } from './user/user.repository';

@Injectable()
export class AuthService {
  constructor(
    protected readonly _responseHandler: ResponseHandler,
    protected readonly _rserRepository: UserRepository,
    private readonly _bcryptPasswordEncoder: BcryptPasswordEncoder,
    protected readonly _jwtService: JwtService,
  ) {}

  async singIn(user: UserSingInDto) {
    try {
      const u = await this._rserRepository.findOne({
        where: {
          email: user.email,
          is_active: true,
        },
        relations: {
          user_by_role: true,
        },
      });

      if (!this._bcryptPasswordEncoder.matches(u?.password, user.password)) {
        throw this._responseHandler.throw({
          message: MessageStatus.User.UNAUTHORIZED,
          response: user.email,
          status: HttpStatus.UNAUTHORIZED,
        });
      }

      delete u.password;

      return this._responseHandler.dataReturn({
        data: {
          message: MessageStatus.Auth.SING_IN(u.email),
          response: {
            user: u,
            token: this._jwtService.sign(
              { ...u },
              { secret: env.JWT_SECRETS, expiresIn: env.JWT_EXPIRES },
            ),
          },
          status: HttpStatus.OK,
        },
        debug: true,
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }
}
