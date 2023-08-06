import { PartialType } from '@nestjs/mapped-types';
import { CreateProcessTypeUserDto } from './create-process-type-user.dto';

export class UpdateProcessTypeUserDto extends PartialType(CreateProcessTypeUserDto) {}
