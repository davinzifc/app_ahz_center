import { PartialType } from '@nestjs/mapped-types';
import { CreateRestorePasswordTokenDto } from './create-restore-password-token.dto';

export class UpdateRestorePasswordTokenDto extends PartialType(CreateRestorePasswordTokenDto) {}
