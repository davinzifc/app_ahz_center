import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UseFilters,
} from '@nestjs/common';
import { Test01AlzhService } from './test_01_alzh.service';
import { CreateTest01AlzhDto } from './dto/create-test_01_alzh.dto';
import { UpdateTest01AlzhDto } from './dto/update-test_01_alzh.dto';
import { UserToken } from '../../../shared/globaldto/user-token.dto';
import { UserJWT } from '../../../shared/decorators/user-token.decorator';
import { ResponseInterceptor } from '../../../shared/interceptors/response.interseptor';
import { ErrorHandler } from '../../../shared/handlers/error.handler';

@Controller()
@UseFilters(new ErrorHandler())
@UseInterceptors(ResponseInterceptor)
export class Test01AlzhController {
  constructor(private readonly test01AlzhService: Test01AlzhService) {}

  @Post()
  create(
    @Body() createTest01AlzhDto: CreateTest01AlzhDto,
    @UserJWT() userToken: UserToken,
  ) {
    return this.test01AlzhService.create(createTest01AlzhDto, userToken);
  }

  @Patch('link-data/:data_id/user/:user_id')
  linkDataByUserId(
    @Param('user_id') user_id: string,
    @Param('data_id') data_id: string,
    @UserJWT() userToken: UserToken,
  ) {
    return this.test01AlzhService.linkDataByUserId(
      +user_id,
      +data_id,
      userToken,
    );
  }

  @Get()
  findAll() {
    return this.test01AlzhService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.test01AlzhService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTest01AlzhDto: UpdateTest01AlzhDto,
  ) {
    return this.test01AlzhService.update(+id, updateTest01AlzhDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.test01AlzhService.remove(+id);
  }
}
