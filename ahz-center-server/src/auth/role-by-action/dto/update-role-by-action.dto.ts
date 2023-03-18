import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleByActionDto } from './create-role-by-action.dto';

export class UpdateRoleByActionDto extends PartialType(CreateRoleByActionDto) {}
