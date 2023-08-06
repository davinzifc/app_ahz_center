import { PartialType } from '@nestjs/mapped-types';
import { CreateUserByRoleDto } from './create-user-by-role.dto';

export class UpdateUserByRoleDto extends PartialType(CreateUserByRoleDto) {}
