import { PartialType } from '@nestjs/mapped-types';
import { CreateMentAlzhDto } from './create-ment-alzh.dto';

export class UpdateMentAlzhDto extends PartialType(CreateMentAlzhDto) {}
