import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ErrorHandler } from '../../shared/handlers/error.handler';
import { ResponseHandler } from '../../shared/handlers/response.handler';
import { Req, Res, UseGuards } from '@nestjs/common/decorators';
import { Request, Response } from 'express';
import { UserJWT } from '../../shared/decorators/user-token.decorator';
import { UserToken } from '../../shared/globaldto/user-token.dto';
import { ValidRoleGuard } from '../../shared/guards/valid-role.guard';
import { Roles } from '../../shared/decorators/role.decorator';
import { RestorePasswordDto } from './dto/restore-password.dto';


@Controller()
@UseFilters(new ErrorHandler())
export class UserController {
  constructor(
    private readonly userService: UserService,
    protected readonly _responseHandler: ResponseHandler 
    ) {}

  @Post()
  async create(
    @Req() req: Request,
    @Res() res: Response,
    @Body() createUserDto: CreateUserDto,
    @UserJWT() user: UserToken
    ) {
    const resultData = await this.userService.create(createUserDto, user);
    this._responseHandler.sendResponse(res, req, resultData);
  }

  @Get()
  async findAll(
    @Req() req: Request,
    @Res() res: Response
  ) {
    const resultData = await this.userService.findAll();
    this._responseHandler.sendResponse(res, req, resultData);
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Req() req: Request,
    @Res() res: Response
    ) {
    const resultData = await this.userService.findOne(+id);
    this._responseHandler.sendResponse(res, req, resultData);
  }

  @Get('email/:email')
  async findByEmail(
    @Param('email') email: string,
    @Req() req: Request,
    @Res() res: Response
    ) {
    const resultData = await this.userService.findOneByEmail(email);
    this._responseHandler.sendResponse(res, req, resultData);
  }

  @Post('restore')
  async restorePassword(
    @Body() user: RestorePasswordDto,
    @Req() req: Request,
    @Res() res: Response
    ) {
    const resultData = await this.userService.restorePassword(user);
    this._responseHandler.sendResponse(res, req, resultData);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string, 
    @Body() updateUserDto: UpdateUserDto,
    @Req() req: Request,
    @Res() res: Response,
    @UserJWT() user: UserToken
    ) {
    const resultData = await this.userService.update(+id, updateUserDto, user);
    this._responseHandler.sendResponse(res, req, resultData);
  }

  @Delete(':id')
  @Roles(1)
  @UseGuards(ValidRoleGuard)
  async remove(
    @Param('id') id: string,
    @Req() req: Request,
    @Res() res: Response,
    @UserJWT() user: UserToken
    ) {
    const resultData = await this.userService.remove(+id, user);
    this._responseHandler.sendResponse(res, req, resultData);
  }
}
