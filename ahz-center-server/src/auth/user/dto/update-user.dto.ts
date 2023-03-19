import { PartialType } from '@nestjs/mapped-types';
import { CreaUpdateUserDto } from './cre-update-user.dto';

export class UpdateUserDto extends PartialType(CreaUpdateUserDto) {
    public is_active: boolean;
}
