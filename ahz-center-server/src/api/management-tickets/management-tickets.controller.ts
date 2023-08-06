import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ManagementTicketsService } from './management-tickets.service';
import { CreateManagementTicketDto } from './dto/create-management-ticket.dto';
import { UpdateManagementTicketDto } from './dto/update-management-ticket.dto';

@Controller()
export class ManagementTicketsController {
  constructor(
    private readonly managementTicketsService: ManagementTicketsService,
  ) {}

  @Post()
  create(@Body() createManagementTicketDto: CreateManagementTicketDto) {
    return this.managementTicketsService.create(createManagementTicketDto);
  }

  @Get()
  findAll() {
    return this.managementTicketsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.managementTicketsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateManagementTicketDto: UpdateManagementTicketDto,
  ) {
    return this.managementTicketsService.update(+id, updateManagementTicketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.managementTicketsService.remove(+id);
  }
}
