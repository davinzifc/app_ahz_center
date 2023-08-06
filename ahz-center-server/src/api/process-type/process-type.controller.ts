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
import { ProcessTypeService } from './process-type.service';
import { CreateProcessTypeDto } from './dto/create-process-type.dto';
import { UpdateProcessTypeDto } from './dto/update-process-type.dto';
import { ResponseInterceptor } from '../../shared/interceptors/response.interseptor';
import { ErrorHandler } from '../../shared/handlers/error.handler';

@Controller()
@UseFilters(new ErrorHandler())
@UseInterceptors(ResponseInterceptor)
export class ProcessTypeController {
  constructor(private readonly processTypeService: ProcessTypeService) {}

  @Post()
  create(@Body() createProcessTypeDto: CreateProcessTypeDto) {
    return this.processTypeService.create(createProcessTypeDto);
  }

  @Get()
  findAll() {
    return this.processTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.processTypeService.findOne(+id);
  }
}
