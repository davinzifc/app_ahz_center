import { PartialType } from '@nestjs/mapped-types';
import { CreateTest01AlzhDto } from './create-test_01_alzh.dto';

export class UpdateTest01AlzhDto extends PartialType(CreateTest01AlzhDto) {}
