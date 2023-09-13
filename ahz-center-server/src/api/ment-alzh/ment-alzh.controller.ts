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
} from '@nestjs/common';
import { MentAlzhService } from './ment-alzh.service';
import { CreateMentAlzhDto } from './dto/create-ment-alzh.dto';
import { UpdateMentAlzhDto } from './dto/update-ment-alzh.dto';
import { ErrorHandler } from '../../shared/handlers/error.handler';
import { ResponseInterceptor } from '../../shared/interceptors/response.interseptor';
import { UserToken } from '../../shared/globaldto/user-token.dto';
import { UserJWT } from '../../shared/decorators/user-token.decorator';

@Controller()
@UseFilters(new ErrorHandler())
@UseInterceptors(ResponseInterceptor)
export class MentAlzhController {
  constructor(private readonly mentAlzhService: MentAlzhService) {}

  @Post()
  create(
    @Body() createMentAlzhDto: CreateMentAlzhDto,
    @UserJWT() userToken: UserToken,
  ) {
    return this.mentAlzhService.create(createMentAlzhDto, userToken);
  }

  @Get()
  findAll() {
    return this.mentAlzhService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mentAlzhService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMentAlzhDto: UpdateMentAlzhDto,
  ) {
    return this.mentAlzhService.update(+id, updateMentAlzhDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mentAlzhService.remove(+id);
  }
}
