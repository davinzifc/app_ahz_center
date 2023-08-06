import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  UseInterceptors,
  Query,
} from '@nestjs/common';
import { ProcessTypeUserService } from './process-type-user.service';
import { CreateProcessTypeUserDto } from './dto/create-process-type-user.dto';
import { UpdateProcessTypeUserDto } from './dto/update-process-type-user.dto';
import { ErrorHandler } from '../../shared/handlers/error.handler';
import { ResponseInterceptor } from '../../shared/interceptors/response.interseptor';
import { UserJWT } from '../../shared/decorators/user-token.decorator';
import { UserToken } from '../../shared/globaldto/user-token.dto';

@Controller()
@UseFilters(new ErrorHandler())
@UseInterceptors(ResponseInterceptor)
export class ProcessTypeUserController {
  constructor(
    private readonly processTypeUserService: ProcessTypeUserService,
  ) {}

  @Post()
  create(
    @Body() createProcessTypeUserDto: CreateProcessTypeUserDto,
    @UserJWT() user: UserToken,
  ) {
    return this.processTypeUserService.create(createProcessTypeUserDto, user);
  }

  @Get()
  findAll(@Query('user') user: string, @Query('process') process: string) {
    return this.processTypeUserService.findAll(+user, +process);
  }

  @Get('specific')
  findSpecificUser(
    @Query('user') user: string,
    @UserJWT() userToken: UserToken,
  ) {
    return this.processTypeUserService.findSpecificUser(+user, userToken);
  }

  @Get('process/:process')
  findDataReportAnyProcess(
    @Param('process') process: string,
    @Query('user') user: string,
    @UserJWT() userToken: UserToken,
  ) {
    return this.processTypeUserService.findDataReportAnyProcess(
      +process,
      userToken,
      +user,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.processTypeUserService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.processTypeUserService.remove(+id);
  }
}
