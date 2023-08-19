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
  UseGuards,
} from '@nestjs/common';
import { NonUserMentAlzhService } from './non-user-ment-alzh.service';
import { CreateNonUserMentAlzhDto } from './dto/create-non-user-ment-alzh.dto';
import { UpdateNonUserMentAlzhDto } from './dto/update-non-user-ment-alzh.dto';
import { ErrorHandler } from '../../shared/handlers/error.handler';
import { ResponseInterceptor } from '../../shared/interceptors/response.interseptor';
import { Roles } from '../../shared/decorators/role.decorator';
import { ValidRoleGuard } from '../../shared/guards/valid-role.guard';
import { UserJWT } from '../../shared/decorators/user-token.decorator';
import { UserToken } from '../../shared/globaldto/user-token.dto';

@Controller()
@UseFilters(new ErrorHandler())
@UseInterceptors(ResponseInterceptor)
export class NonUserMentAlzhController {
  constructor(
    private readonly nonUserMentAlzhService: NonUserMentAlzhService,
  ) {}

  @Post()
  create(@Body() createNonUserMentAlzhDto: CreateNonUserMentAlzhDto) {
    return this.nonUserMentAlzhService.create(createNonUserMentAlzhDto);
  }

  @Get()
  findAll() {
    return this.nonUserMentAlzhService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nonUserMentAlzhService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNonUserMentAlzhDto: UpdateNonUserMentAlzhDto,
  ) {
    return this.nonUserMentAlzhService.update(+id, updateNonUserMentAlzhDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nonUserMentAlzhService.remove(+id);
  }

  @Patch('email/data-retrieved')
  @Roles(3)
  @UseGuards(ValidRoleGuard)
  async getDataFromEmail() {
    return await this.nonUserMentAlzhService.getDataFromEmail();
  }

  @Get('pending/no-assigned')
  getPendingNoAssigned() {
    return this.nonUserMentAlzhService.getPendingNoAssigned();
  }

  @Patch('link-data/:data_id/user/:user_id')
  linkDataByUserId(
    @Param('user_id') user_id: string,
    @Param('data_id') data_id: string,
    @UserJWT() userToken: UserToken,
  ) {
    return this.nonUserMentAlzhService.linkDataByUserId(
      +user_id,
      +data_id,
      userToken,
    );
  }
}
