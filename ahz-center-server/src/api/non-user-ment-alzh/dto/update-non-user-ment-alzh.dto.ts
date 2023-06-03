import { PartialType } from '@nestjs/mapped-types';
import { CreateNonUserMentAlzhDto } from './create-non-user-ment-alzh.dto';

export class UpdateNonUserMentAlzhDto extends PartialType(CreateNonUserMentAlzhDto) {}
