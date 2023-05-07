import { HttpStatus, Injectable } from '@nestjs/common';
import { MessageStatus } from '../../shared/constants/message-status.const';
import { UserToken } from '../../shared/globaldto/user-token.dto';
import { ResponseHandler } from '../../shared/handlers/response.handler';
import { BcryptPasswordEncoder } from '../../shared/utils/bcrypt.util';
import { MailerUtil } from '../../shared/utils/mailer.util';
import { UserByRoleRepository } from '../user-by-role/user-by-role.repository';
import { UserRoleRepository } from '../user-role/user-role.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { RestorePasswordDto } from './dto/restore-password.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import { v4 as uuidv4 } from 'uuid';
import { RestorePasswordTokenRepository } from '../restore-password-token/restore-password-token.repository';
import { RestorePasswordTokenService } from '../restore-password-token/restore-password-token.service';
import { RestorePasswordToken } from '../restore-password-token/entities/restore-password-token.entity';
import { generate } from 'generate-password';

@Injectable()
export class UserService {

  constructor(
    protected readonly _userRepository: UserRepository,
    protected readonly _responseHandler: ResponseHandler,
    protected readonly _userRoleRepository: UserRoleRepository,
    protected readonly _bcryptPasswordEncoder: BcryptPasswordEncoder,
    protected readonly _userByRoleRepository: UserByRoleRepository,
    protected readonly _mailerUtil: MailerUtil,
    protected readonly _restorePasswordTokenRepository: RestorePasswordTokenRepository,
    protected readonly _restorePasswordTokenService: RestorePasswordTokenService
  ) { }

  async create(cu: CreateUserDto, user: UserToken) {
    try {
      if (!this.validUser(cu)) {
        throw this._responseHandler.throw({
          message: MessageStatus.User.BAD_REQUEST,
          response: cu,
          status: HttpStatus.BAD_REQUEST
        });
      }
      const { email, first_name, last_name, password, user_role_id, is_application } = cu;

      const existUser = await this._userRepository.findOne({
        where: {
          email: email.trim(),
          is_active: true
        }
      });

      if (existUser) {
        throw this._responseHandler.throw({
          message: MessageStatus.User.CONFLICT,
          response: cu,
          status: HttpStatus.CONFLICT
        });
      }

      if (user_role_id === 1) {
        throw this._responseHandler.throw({
          message: MessageStatus.User.UNAUTHORIZED,
          response: cu,
          status: HttpStatus.UNAUTHORIZED
        });
      }

      const role = await this._userRoleRepository.findOne({
        where: {
          user_role_id: is_application?3:user_role_id
        }
      });

      if (!role) {
        throw this._responseHandler.throw({
          message: MessageStatus.UserRole.NOT_FOUND,
          response: cu,
          status: HttpStatus.NOT_FOUND
        });
      }
      const appPassword = generate({
        length: 15,
        numbers: true
      });

      console.log(appPassword);

      const newUser = await this._userRepository.save({
        email: email.trim(),
        first_name: first_name,
        last_name: is_application?'APP':last_name,
        password: this._bcryptPasswordEncoder.encode(is_application? appPassword :password),
        is_application: is_application,
        created_by: user.user_id,
        update_by: user.user_id
      });

      this._userByRoleRepository.save({
        user_id: newUser.user_id,
        role_id: role.user_role_id,
        created_by: user.user_id,
        update_by: user.user_id
      })

      delete newUser.password;

      return this._responseHandler.dataReturn({
        data: {
          message: MessageStatus.User.OK_CREATE,
          response: newUser,
          status: HttpStatus.CREATED
        },
        debug: true
      })
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  protected validUser(cu: CreateUserDto) {
    for (const key in cu) {
      if (!Object.prototype.hasOwnProperty.call(cu, key) || !cu[key]) {
        return false;
      }
    }
    return true;
  }

  async findAll() {
    try {
      const users = await this._userRepository.find({
        select: ['user_id', 'email', 'first_name', 'last_name', 'user_by_role', 'created_by', 'created_at', 'update_by', 'updated_at', 'is_active'],
        where: {
          is_active: true
        },
        relations: {
          user_by_role: {
            role: true
          }
        }
      });

      if (!users.length) {
        throw this._responseHandler.throw({
          message: MessageStatus.User.NOT_FOUND,
          response: {},
          status: HttpStatus.NOT_FOUND
        });
      }

      return this._responseHandler.dataReturn({
        data: {
          message: MessageStatus.User.OK,
          response: users,
          status: HttpStatus.OK
        },
        debug: true
      })
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  async findOne(id: number) {
    try {
      const users = await this._userRepository.findOne({
        select: ['user_id', 'email', 'first_name', 'last_name', 'user_by_role', 'created_by', 'created_at', 'update_by', 'updated_at', 'is_active'],
        where: {
          user_id: id,
          is_active: true
        },
        relations: {
          user_by_role: {
            role: true
          }
        }
      });

      if (!users) {
        throw this._responseHandler.throw({
          message: MessageStatus.User.NOT_FOUND,
          response: id,
          status: HttpStatus.NOT_FOUND
        });
      }

      return this._responseHandler.dataReturn({
        data: {
          message: MessageStatus.User.OK,
          response: users,
          status: HttpStatus.OK
        },
        debug: true
      })
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  async findOneByEmail(email: string) {
    try {
      const users = await this._userRepository.find({
        select: ['user_id', 'email', 'first_name', 'last_name', 'user_by_role', 'created_by', 'created_at', 'update_by', 'updated_at', 'is_active'],
        where: {
          email: email,
          is_active: true
        },
        relations: {
          user_by_role: {
            role: true
          }
        }
      });

      if (!users) {
        throw this._responseHandler.throw({
          message: MessageStatus.User.NOT_FOUND,
          response: email,
          status: HttpStatus.NOT_FOUND
        });
      }

      return this._responseHandler.dataReturn({
        data: {
          message: MessageStatus.User.OK,
          response: users,
          status: HttpStatus.OK
        },
        debug: true
      })
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  async findOneFullSearch(name: string) {
    try {
      const users = await this._userRepository.find({
        select: ['user_id', 'email', 'first_name', 'last_name', 'user_by_role', 'created_by', 'created_at', 'update_by', 'updated_at', 'is_active'],
        where: [
          {
            email: name,
            is_active: true
          },
          {
            last_name: name,
            is_active: true
          },
          {
            first_name: name,
            is_active: true
          }
        ],
        relations: {
          user_by_role: {
            role: true
          }
        }
      });

      if (!users) {
        throw this._responseHandler.throw({
          message: MessageStatus.User.NOT_FOUND,
          response: name,
          status: HttpStatus.NOT_FOUND
        });
      }

      return this._responseHandler.dataReturn({
        data: {
          message: MessageStatus.User.OK,
          response: users,
          status: HttpStatus.OK
        },
        debug: true
      })
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto, user: UserToken) {
    try {
      const users = await this._userRepository.findOne({
        where: {
          user_id: id
        }
      });

      if (!users) {
        throw this._responseHandler.throw({
          message: MessageStatus.User.NOT_FOUND,
          response: id,
          status: HttpStatus.NOT_FOUND
        });
      }

      await this._userRepository.update(users.user_id, {
        first_name: updateUserDto.first_name,
        last_name: updateUserDto.last_name,
        update_by: user.user_id
      });

      return this._responseHandler.dataReturn({
        data: {
          message: MessageStatus.User.OK_CREATE,
          response: users,
          status: HttpStatus.CREATED
        },
        debug: true
      })
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  updatePassword(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number, user: UserToken) {
    try {
      const users = await this._userRepository.findOne({
        where: {
          user_id: id,
          is_active: true
        }
      });

      if (!users) {
        throw this._responseHandler.throw({
          message: MessageStatus.User.NOT_FOUND,
          response: id,
          status: HttpStatus.NOT_FOUND
        });
      }

      await this._userRepository.update(users.user_id, {
        is_active: false,
        update_by: user.user_id
      });

      this._userByRoleRepository.update({ user_id: users.user_id }, {
        is_active: false,
        update_by: user.user_id
      })

      return this._responseHandler.dataReturn({
        data: {
          message: MessageStatus.User.NO_CONTENT(id),
          response: user.email,
          status: HttpStatus.OK
        },
        debug: true
      })
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  async restorePassword(user: RestorePasswordDto){
    try {
      const userData = await this._userRepository.findOne({
        where: {
          email: user.email,
          is_active: true
        }
      });

      if (!userData) {
        throw this._responseHandler.throw({
          message: MessageStatus.User.NOT_FOUND,
          response: user.email,
          status: HttpStatus.NOT_FOUND
        });
      }

      const token: string = this.prepareUuid(uuidv4());
      const restoreUser: RestorePasswordToken = await this._restorePasswordTokenService.createAnyToken(userData, token);

      /**
       * Aca la logica para el correo
       */

      return this._responseHandler.dataReturn({
        data: {
          message: MessageStatus.User.RESTORE(userData.email),
          response: userData.email,
          status: HttpStatus.OK
        },
        debug: true
      })
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  protected prepareUuid(token: string): string{
    const regexUuid = /(-)/mg;
    return token.replace(regexUuid,'');
  }
}