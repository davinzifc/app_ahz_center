import { PartialType } from '@nestjs/mapped-types';
import { CreaUpdateUserDto } from './cre-update-user.dto';
import { User } from '../entities/user.entity';
import { MentAlzh } from '../../../api/ment-alzh/entities/ment-alzh.entity';
import { Gender } from '../entities/gender.entity';
import { UserByRole } from '../../user-by-role/entities/user-by-role.entity';

export class UpdateUserDto {
  birthdate: Date = null;
  identity_card: number = null;
  created_at: Date = null;
  created_by: number = null;
  email: string = null;
  first_name: string = null;
  gender_id: number = null;
  is_active: boolean = null;
  is_application: boolean = null;
  last_name: string = null;
  phone_number: number = null;
  update_by: number = null;
  updated_at: Date = null;
}
