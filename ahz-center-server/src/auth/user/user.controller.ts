import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ErrorHandler } from '../../shared/handlers/error.handler';
import { ResponseHandler } from '../../shared/handlers/response.handler';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { UserJWT } from '../../shared/decorators/user-token.decorator';
import { UserToken } from '../../shared/globaldto/user-token.dto';
import { ValidRoleGuard } from '../../shared/guards/valid-role.guard';
import { Roles } from '../../shared/decorators/role.decorator';
import { RestorePasswordDto } from './dto/restore-password.dto';
import { ResponseInterceptor } from '../../shared/interceptors/response.interseptor';

@Controller()
@UseFilters(new ErrorHandler())
@UseInterceptors(ResponseInterceptor)
export class UserController {
  constructor(
    private readonly userService: UserService,
    protected readonly _responseHandler: ResponseHandler,
  ) {}

  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
    @UserJWT() user: UserToken,
  ) {
    return await this.userService.create(createUserDto, user);
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userService.findOne(+id);
  }

  @Get('email/:email')
  async findByEmail(@Param('email') email: string) {
    return await this.userService.findOneByEmail(email);
  }

  @Get('generic/user-name/:userName')
  async getUserByGenericName(@Param('userName') userName: string) {
    return await this.userService.getUserByGenericName(userName);
  }

  @Post('restore')
  async restorePassword(@Body() user: RestorePasswordDto) {
    return await this.userService.restorePassword(user);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @UserJWT() user: UserToken,
  ) {
    return await this.userService.update(+id, updateUserDto, user);
  }

  @Delete(':id')
  @Roles(1)
  @UseGuards(ValidRoleGuard)
  async remove(@Param('id') id: string, @UserJWT() user: UserToken) {
    return await this.userService.remove(+id, user);
  }

  @Get('active/profile')
  async findActiveProfile(@UserJWT() user: UserToken) {
    return this.userService.findProfileActive(user);
  }
}
