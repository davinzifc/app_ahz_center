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

@Controller()
@UseFilters(new ErrorHandler())
@UseInterceptors(ResponseInterceptor)
export class MentAlzhController {
  constructor(private readonly mentAlzhService: MentAlzhService) {}

  @Post()
  create(@Body() createMentAlzhDto: CreateMentAlzhDto) {
    return this.mentAlzhService.create(createMentAlzhDto);
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
