import { Injectable } from '@nestjs/common';
import { CreateManagementTicketDto } from './dto/create-management-ticket.dto';
import { UpdateManagementTicketDto } from './dto/update-management-ticket.dto';

@Injectable()
export class ManagementTicketsService {
  create(createManagementTicketDto: CreateManagementTicketDto) {
    return 'This action adds a new managementTicket';
  }

  findAll() {
    return `This action returns all managementTickets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} managementTicket`;
  }

  update(id: number, updateManagementTicketDto: UpdateManagementTicketDto) {
    return `This action updates a #${id} managementTicket`;
  }

  remove(id: number) {
    return `This action removes a #${id} managementTicket`;
  }
}
