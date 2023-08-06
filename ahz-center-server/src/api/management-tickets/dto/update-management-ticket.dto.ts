import { PartialType } from '@nestjs/mapped-types';
import { CreateManagementTicketDto } from './create-management-ticket.dto';

export class UpdateManagementTicketDto extends PartialType(CreateManagementTicketDto) {}
