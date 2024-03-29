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
import { MailerService } from '@nestjs-modules/mailer';
import { userBody } from 'shared/email-bodys/user.body.email';
import { UserRoleDto } from './dto/user-role.dto';
import { APP } from '../../shared/constants/info-api.const';
import { EmailReaderUtile } from '../../shared/utils/email-reader.util';
import { returnResponseDto } from '../../shared/globaldto/response.dto';
import { Like, MoreThanOrEqual } from 'typeorm';
import { UpdateAttributeDto } from './dto/update-attribute.dto';
import { GeneralFunctionsUtil } from '../../shared/utils/general-functions.util';
import { GenderRepository } from './gender.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly _userRepository: UserRepository,
    private readonly _responseHandler: ResponseHandler,
    private readonly _userRoleRepository: UserRoleRepository,
    private readonly _bcryptPasswordEncoder: BcryptPasswordEncoder,
    private readonly _userByRoleRepository: UserByRoleRepository,
    private readonly _mailerUtil: MailerUtil,
    private readonly _restorePasswordTokenRepository: RestorePasswordTokenRepository,
    private readonly _restorePasswordTokenService: RestorePasswordTokenService,
    private readonly _mailerService: MailerService,
    private readonly _emailReaderUtile: EmailReaderUtile,
    private readonly _genderRepository: GenderRepository,
  ) {}

  async create(cu: CreateUserDto, user: UserToken): Promise<returnResponseDto> {
    try {
      const ignore = ['phone_number', 'identity_card'];
      if (cu.is_application) ignore.push('password');
      const vt = GeneralFunctionsUtil.validAttributes(cu, CreateUserDto, {
        ignore: ignore,
      });
      if (!vt.validation) {
        throw this._responseHandler.throw({
          message: MessageStatus.User.BAD_REQUEST,
          response: vt.attrError,
          status: HttpStatus.BAD_REQUEST,
        });
      }
      const {
        email,
        first_name,
        last_name,
        password,
        user_role_id,
        is_application,
        birthdate,
        identity_card,
        phone_number,
        gender_id,
      } = cu;

      const existUser = await this._userRepository.findOne({
        where: {
          email: email.trim(),
          is_active: true,
        },
      });

      if (existUser) {
        throw this._responseHandler.throw({
          message: MessageStatus.User.CONFLICT,
          response: cu,
          status: HttpStatus.CONFLICT,
        });
      }

      if (user_role_id === 1) {
        throw this._responseHandler.throw({
          message: MessageStatus.User.UNAUTHORIZED,
          response: cu,
          status: HttpStatus.UNAUTHORIZED,
        });
      }

      const role = await this._userRoleRepository.findOne({
        where: {
          user_role_id: is_application ? 3 : user_role_id,
        },
      });

      if (!role) {
        throw this._responseHandler.throw({
          message: MessageStatus.UserRole.NOT_FOUND,
          response: cu,
          status: HttpStatus.NOT_FOUND,
        });
      }
      const appPassword = generate({
        length: 15,
        numbers: true,
      });

      console.log(appPassword);

      const newUser = await this._userRepository.save({
        email: email.trim(),
        first_name: first_name,
        last_name: is_application ? 'APP' : last_name,
        password: this._bcryptPasswordEncoder.encode(
          is_application ? appPassword : password,
        ),
        is_application: is_application,
        birthdate: birthdate,
        identity_card: identity_card,
        phone_number: phone_number,
        gender_id: gender_id,
        created_by: user.user_id,
        update_by: user.user_id,
      });

      await this._userByRoleRepository.save({
        user_id: newUser.user_id,
        role_id: role.user_role_id,
        created_by: user.user_id,
        update_by: user.user_id,
      });

      const tempUser: UserRoleDto = {
        ...newUser,
        password: is_application ? appPassword : password,
        role: role.role_name,
      };

      await this._mailerService.sendMail({
        to: newUser.email,
        subject: `[no-reply] Usuario creado exitosamente`,
        html: userBody.create(tempUser, APP),
      });

      delete newUser.password;

      return this._responseHandler.dataReturn({
        data: {
          message: MessageStatus.User.OK_CREATE,
          response: newUser,
          status: HttpStatus.CREATED,
        },
        debug: true,
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  async updateUser(user: UserToken, edit_user_id: number, at: UpdateUserDto) {
    try {
      const resUser = await this._userRepository.findOne({
        where: {
          user_id: user.user_id,
          is_active: true,
        },
        relations: {
          user_by_role: true,
        },
      });

      const editResUser = await this._userRepository.findOne({
        where: {
          user_id: edit_user_id,
          is_active: true,
        },
      });

      if (!resUser || !editResUser) {
        throw this._responseHandler.throw({
          message: MessageStatus.User.NOT_FOUND,
          response: {},
          status: HttpStatus.NOT_FOUND,
        });
      }
      console.log('at', !resUser.user_by_role.find((el) => el.role_id <= 2));
      const setUserUpdate = GeneralFunctionsUtil.setObjectToUpdate(
        UpdateUserDto,
        at,
        !resUser.user_by_role.find((el) => el.role_id <= 2)
          ? ['identity_card', 'birthdate', 'email']
          : [],
      );
      console.log(setUserUpdate);
      await this._userRepository.update(editResUser.user_id, setUserUpdate);
      return this._responseHandler.dataReturn({
        data: {
          message: MessageStatus.User.OK_UPDATE(editResUser.user_id),
          response: { ...editResUser, ...setUserUpdate },
          status: HttpStatus.OK,
        },
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  async updateAttribute(user: UserToken, at: UpdateAttributeDto) {
    try {
      const res = await this._userRepository.findOne({
        where: {
          user_id: user.user_id,
          is_active: true,
        },
      });

      if (!res) {
        throw this._responseHandler.throw({
          message: MessageStatus.User.NOT_FOUND,
          response: {},
          status: HttpStatus.NOT_FOUND,
        });
      }

      await this._userRepository.update(res.user_id, at);
      return this._responseHandler.dataReturn({
        data: {
          message: MessageStatus.User.OK_UPDATE(res.user_id),
          response: {},
          status: HttpStatus.OK,
        },
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  protected validUser(cu: CreateUserDto) {
    for (const key in cu) {
      if (
        !Object.prototype.hasOwnProperty.call(cu, key) ||
        cu[key] == undefined
      ) {
        return false;
      }
    }
    return true;
  }

  async findAll(): Promise<returnResponseDto> {
    try {
      const users = await this._userRepository.find({
        select: [
          'user_id',
          'email',
          'first_name',
          'last_name',
          'user_by_role',
          'created_by',
          'created_at',
          'update_by',
          'updated_at',
          'is_active',
        ],
        where: {
          is_active: true,
        },
        relations: {
          user_by_role: {
            role: true,
          },
        },
      });

      if (!users.length) {
        throw this._responseHandler.throw({
          message: MessageStatus.User.NOT_FOUND,
          response: {},
          status: HttpStatus.NOT_FOUND,
        });
      }

      return this._responseHandler.dataReturn({
        data: {
          message: MessageStatus.User.OK,
          response: users,
          status: HttpStatus.OK,
        },
        debug: true,
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  async findOne(id: number): Promise<returnResponseDto> {
    try {
      const users = await this._userRepository.findOne({
        select: [
          'user_id',
          'email',
          'first_name',
          'last_name',
          'user_by_role',
          'created_by',
          'created_at',
          'update_by',
          'updated_at',
          'is_active',
          'birthdate',
          'identity_card',
          'phone_number',
          'gender_id',
        ],
        where: {
          user_id: id,
          is_active: true,
        },
        relations: {
          user_by_role: {
            role: true,
          },
          obj_gender: true,
        },
      });

      if (!users) {
        throw this._responseHandler.throw({
          message: MessageStatus.User.NOT_FOUND,
          response: id,
          status: HttpStatus.NOT_FOUND,
        });
      }

      return this._responseHandler.dataReturn({
        data: {
          message: MessageStatus.User.OK,
          response: users,
          status: HttpStatus.OK,
        },
        debug: true,
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  async findOneByEmail(email: string): Promise<returnResponseDto> {
    try {
      const users = await this._userRepository.find({
        select: [
          'user_id',
          'email',
          'first_name',
          'last_name',
          'user_by_role',
          'created_by',
          'created_at',
          'update_by',
          'updated_at',
          'is_active',
        ],
        where: {
          email: email,
          is_active: true,
        },
        relations: {
          user_by_role: {
            role: true,
          },
        },
      });

      if (!users) {
        throw this._responseHandler.throw({
          message: MessageStatus.User.NOT_FOUND,
          response: email,
          status: HttpStatus.NOT_FOUND,
        });
      }

      return this._responseHandler.dataReturn({
        data: {
          message: MessageStatus.User.OK,
          response: users,
          status: HttpStatus.OK,
        },
        debug: true,
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  async findOneFullSearch(name: string): Promise<returnResponseDto> {
    try {
      const users = await this._userRepository.find({
        select: [
          'user_id',
          'email',
          'first_name',
          'last_name',
          'user_by_role',
          'created_by',
          'created_at',
          'update_by',
          'updated_at',
          'is_active',
        ],
        where: [
          {
            email: name,
            is_active: true,
          },
          {
            last_name: name,
            is_active: true,
          },
          {
            first_name: name,
            is_active: true,
          },
        ],
        relations: {
          user_by_role: {
            role: true,
          },
        },
      });

      if (!users) {
        throw this._responseHandler.throw({
          message: MessageStatus.User.NOT_FOUND,
          response: name,
          status: HttpStatus.NOT_FOUND,
        });
      }

      return this._responseHandler.dataReturn({
        data: {
          message: MessageStatus.User.OK,
          response: users,
          status: HttpStatus.OK,
        },
        debug: true,
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  /**
   *
   * @param id
   * @param updateUserDto
   * @param user
   * @returns
   * @deprecated
   */
  async update(
    id: number,
    updateUserDto: UpdateUserDto,
    user: UserToken,
  ): Promise<returnResponseDto> {
    try {
      const users = await this._userRepository.findOne({
        where: {
          user_id: id,
        },
      });

      if (!users) {
        throw this._responseHandler.throw({
          message: MessageStatus.User.NOT_FOUND,
          response: id,
          status: HttpStatus.NOT_FOUND,
        });
      }

      await this._userRepository.update(users.user_id, {
        first_name: updateUserDto.first_name,
        last_name: updateUserDto.last_name,
        update_by: user.user_id,
      });

      return this._responseHandler.dataReturn({
        data: {
          message: MessageStatus.User.OK_CREATE,
          response: users,
          status: HttpStatus.CREATED,
        },
        debug: true,
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  updatePassword(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number, user: UserToken): Promise<returnResponseDto> {
    try {
      const users = await this._userRepository.findOne({
        where: {
          user_id: id,
          is_active: true,
        },
      });

      if (!users) {
        throw this._responseHandler.throw({
          message: MessageStatus.User.NOT_FOUND,
          response: id,
          status: HttpStatus.NOT_FOUND,
        });
      }

      await this._userRepository.update(users.user_id, {
        is_active: false,
        update_by: user.user_id,
      });

      this._userByRoleRepository.update(
        { user_id: users.user_id },
        {
          is_active: false,
          update_by: user.user_id,
        },
      );

      return this._responseHandler.dataReturn({
        data: {
          message: MessageStatus.User.NO_CONTENT(id),
          response: user.email,
          status: HttpStatus.OK,
        },
        debug: true,
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  async restorePassword(user: RestorePasswordDto): Promise<returnResponseDto> {
    try {
      const userData = await this._userRepository.findOne({
        where: {
          email: user.email,
          is_active: true,
        },
      });
      if (!userData) {
        throw this._responseHandler.throw({
          message: MessageStatus.User.NOT_FOUND,
          response: user.email,
          status: HttpStatus.NOT_FOUND,
        });
      }

      const token: string = this.prepareUuid(uuidv4());
      const restoreUser: RestorePasswordToken =
        await this._restorePasswordTokenService.createAnyToken(userData, token);

      /*await this._mailerService.sendMail({
        to: user.email,
        subject: `Test email`,
        html: userBody.create(userData),
      });*/

      return this._responseHandler.dataReturn({
        data: {
          message: MessageStatus.User.RESTORE(userData.email),
          response: userData.email,
          status: HttpStatus.OK,
        },
        debug: true,
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  async getUserByGenericName(name: string) {
    try {
      const users = await this._userRepository.find({
        select: [
          'user_id',
          'email',
          'first_name',
          'last_name',
          'user_by_role',
          'created_by',
          'created_at',
          'update_by',
          'updated_at',
          'is_active',
        ],
        where: [...this.processGenericName(name)],
      });
      return this._responseHandler.dataReturn({
        data: {
          message: MessageStatus.User.OK,
          response: users,
          status: HttpStatus.OK,
        },
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  processGenericName(name: string): any {
    const processName: string[] = name.toLowerCase().split(' ');
    return processName
      .map((el) => [
        {
          last_name: Like(`%${el}%`),
          is_active: true,
        },
        {
          first_name: Like(`%${el}%`),
          is_active: true,
        },
      ])
      .flat();
  }

  async findProfileActive(user: UserToken) {
    try {
      const users = await this._userRepository.findOne({
        where: {
          user_id: user.user_id,
          is_active: true,
        },
        relations: {
          user_by_role: {
            role: true,
          },
          obj_gender: true,
        },
      });

      delete users.password;

      if (!users) {
        throw this._responseHandler.throw({
          message: MessageStatus.User.NOT_FOUND,
          response: {},
          status: HttpStatus.NOT_FOUND,
        });
      }

      return this._responseHandler.dataReturn({
        data: {
          message: MessageStatus.User.OK,
          response: users,
          status: HttpStatus.OK,
        },
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  async findUsersByRoleType(role_id: number, user: UserToken) {
    try {
      const roleActive = await this._userByRoleRepository.isValidRole(
        user.user_id,
      );
      if (roleActive < role_id && roleActive !== 1) {
        throw this._responseHandler.throw({
          message: MessageStatus.User.UNAUTHORIZED,
          response: {},
          status: HttpStatus.UNAUTHORIZED,
        });
      }

      const users = await this._userRepository.findAllUserByRoleId(role_id);
      return this._responseHandler.dataReturn({
        data: {
          message: MessageStatus.User.OK,
          response: users,
          status: HttpStatus.OK,
        },
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  async findUsersByRoleActive(user: UserToken) {
    try {
      const roleActive = await this._userByRoleRepository.isValidRole(
        user.user_id,
      );
      const users = await this._userRepository.findAllUserByActiveRole(
        roleActive,
      );
      return this._responseHandler.dataReturn({
        data: {
          message: MessageStatus.User.OK,
          response: users,
          status: HttpStatus.OK,
        },
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  async findAllGender() {
    try {
      const res = await this._genderRepository.find();
      return this._responseHandler.dataReturn({
        data: {
          message: `Find all active genders`,
          response: res,
          status: HttpStatus.OK,
        },
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  protected prepareUuid(token: string): string {
    const regexUuid = /(-)/gm;
    return token.replace(regexUuid, '');
  }
}
