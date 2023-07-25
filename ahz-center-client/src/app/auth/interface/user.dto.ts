import { BaseEntity } from './base-entity';

export class User extends BaseEntity {
  public user_id: number | null = null;
  public first_name: string = '';
  public last_name: string = '';
  public email: string = '';
  public is_application: boolean | null = null;
  public birthdate: string = '';
  public identity_card: string | null = null;
  public phone_number: string | null = null;
  public obj_gender: Gender = new Gender();
  public user_by_role!: UserByRole[];
}

export class UserByRole extends BaseEntity {
  public user_id!: number;
  public role_id!: number;
  public role!: Role;
}

export class Role {
  public user_role_id!: number;
  public role_name!: string;
}

export class Gender {
  public gender_id!: number;
  public name: string = '';
  public description: string = '';
}
